const {commentCreate, commentGetById, commentDelete, commentUpdate} = require("../api/CommentController")

module.exports.showComment = (req, res) => {
    commentGetById(req, res, (comment) => {
        res.render('comment', {
            comment: comment,
            edit: req.originalUrl.match(/edit$/),
            session: req.session,
        })
    })
}

module.exports.updateComment = (req, res) => {
    req.body.id = req.params.id

    if (req.body.method === 'put') {
        commentUpdate(req, res, (comment) => {
            res.redirect(`/blog/${req.body.blog_id}`)
        })
    } else if (req.body.method === 'delete') {
        commentDelete(req, res, (comment) => {
            res.redirect(`/blog/${req.body.blog_id}`)
        })
    }
}

module.exports.submitComment = (req, res) => {
    commentCreate(req, res, (comment) => {
        res.redirect(`/blog/${req.body.blog_id}`)
    })
}