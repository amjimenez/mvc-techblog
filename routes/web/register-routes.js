const {showRegistration, submitRegistration} = require("../../controllers/web/AuthController")
const router = require('express').Router()

router.get('/', showRegistration)
router.post('/', submitRegistration)

module.exports = router