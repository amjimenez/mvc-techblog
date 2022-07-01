const router = require('express').Router()
const {
    blogGetAll,
    blogGetById,
    blogCreate,
    blogUpdate,
    blogDelete
} = require("../../controllers/api/BlogController")

router.get('/', blogGetAll)
router.get('/:id', blogGetById)
router.post('/', blogCreate)
router.put('/:id', blogUpdate)
router.delete('/:id', blogDelete)

module.exports = router