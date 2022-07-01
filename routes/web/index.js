const router = require('express').Router()
const authRoutes = require('./auth-routes')
const blogRoutes = require('./blog-routes')
const commentRoutes = require('./comment-routes')
const registerRoutes = require('./register-routes')
const {homeView} = require("../../controllers/web/HomeController")
const {submitLogout} = require("../../controllers/web/AuthController")
const {showDashboard} = require("../../controllers/web/DashboardController");

router.get('/', homeView)
router.get('/dashboard', showDashboard)
router.get('/logout', submitLogout)
router.use('/login', authRoutes)
router.use('/register', registerRoutes)
router.use('/blog', blogRoutes)
router.use('/comment', commentRoutes)

module.exports = router