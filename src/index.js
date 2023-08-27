const config = require('./resources/config/config.js')
const WebServer = require('./web/WebServer')
const webserver = new WebServer()

webserver.setup()
webserver.https.listen(config.port, () => {
    console.log(`> App đang chạy tại: ${webserver.url.origin}`)
})