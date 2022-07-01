const {submitComment, showComment, updateComment} = require("../../controllers/web/CommentController")
const {commentUpdate} = require("../../controllers/api/CommentController")
const router = require('express').Router()

router.get('/:id', showComment)
router.get('/:id/edit', showComment)
router.post('/', submitComment)
router.post('/:id', updateComment)

module.exports = router