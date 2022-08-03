const {Router} = require('express')
const AuthRouter = Router()


AuthRouter.route("/login").get(require('./login.view'))

module.exports = AuthRouter