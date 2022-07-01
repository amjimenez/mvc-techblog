const router = require('express').Router()
const apiRoutes = require('./api')
const webRoutes = require('./web')

router.use('/api', apiRoutes)
router.use('/', webRoutes)

router.use((req, res) => {
    res.send("<h1>Route not found!</h1>")
})

module.exports = router