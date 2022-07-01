const router = require('express').Router()
const blogRoutes = require('./blog-routes')
const commentRoutes = require('./comment-routes')
const {blogGetAllByUserId} = require("../../controllers/api/BlogController")

router.use('/blogs', blogRoutes)
router.use('/blogs/:id/comments', commentRoutes)
router.get('/users/:id/blogs', blogGetAllByUserId)

module.exports = router