const {submitLogout, showLogin, submitLogin} = require("../../controllers/web/AuthController")
const router = require('express').Router()

router.get('/', showLogin)
router.post('/', submitLogin)

module.exports = router