const config = require('../resources/config/config.js')

const compression = require('compression')
const express = require('express')
const logger = require('morgan')
const https = require('https')
const createError = require('http-errors')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const db = require('../resources/config/mongodb.js')

db.connect()

class WebServer {
    constructor() {
        this.app = express()
        this.https = https.createServer({
            cert: fs.readFileSync('./src/resources/security/cert.pem'),
            key: fs.readFileSync('./src/resources/security/cert.key')
        }, this.app)

        this.domain = config.debug
            ? `https://localhost:${config.port}`
            : config.domain

        this.url = new URL(this.domain)
    }

    setup() {
        this.app.set('views', path.join(__dirname, 'views'))
        this.app.set('view engine', 'ejs')

        if (config.debug) {
            this.app.use(logger('dev'))
        }

        this.app.use(cors({ origin: this.url.origin }))
        this.app.use(express.static(path.join(__dirname, 'public')))
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(compression())

        this.app.get('/', (req, res) => res.render('index'))

        this.initialize()

        this.app.use((req, res, next) => next(createError(404)))
        this.app.use((error, req, res, next) => {
            res.render('error')
        })
    }

    initialize(filepath = '/') {
        const routerPath = path.join(__dirname, 'routers' + filepath)
        for (const file of fs.readdirSync(routerPath)) {
            if (file.endsWith('.js')) {
                const routerFuncion = require('./routers' + filepath + file)
                if (typeof routerFuncion !== 'function') continue

                const router = express.Router({ strict: false })
                routerFuncion.call(this, router)

                const pathname = file.slice(0, file.indexOf('.js'))
                this.app.use(filepath + pathname, router)
            } else {
                this.initialize(filepath + file + '/')
            }
        }
    }
}

module.exports = WebServer