const {showBlog, submitBlog, updateBlog, showBlogForm} = require("../../controllers/web/BlogController")
const router = require('express').Router()

router.get('/', showBlogForm)
router.get('/:id', showBlog)
router.get('/:id/edit', showBlog)
router.post('/', submitBlog)
router.post('/:id', updateBlog)

module.exports = router