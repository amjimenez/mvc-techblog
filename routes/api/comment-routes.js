const router = require('express').Router()
const {
    commentGetAll,
    commentGetById,
    commentCreate,
    commentDelete,
    commentUpdate
} = require("../../controllers/api/CommentController")

router.get('/', commentGetAll)
router.get('/:id', commentGetById)
router.post('/', commentCreate)
router.put('/:id', commentUpdate)
router.delete('/:id', commentDelete)

module.exports = router