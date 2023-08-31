const WebServer = require('../WebServer')
const { Router } = require('express')

/**
 * @this {WebServer}
 * @arg {Router} router
 */
module.exports = function (router) {
    router.get('/', (req, res) => res.render('gioi-thieu'))
}