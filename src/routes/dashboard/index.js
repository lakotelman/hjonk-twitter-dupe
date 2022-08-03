const {Router} = require('express')
const DashboardRouter = Router()


DashboardRouter.route("/").get(require('./dashboard.view'))
DashboardRouter.route("/profile").get(require('./userProfile.view'))

module.exports = DashboardRouter