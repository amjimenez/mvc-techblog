const {blogGetById, blogUpdate, blogDelete, blogCreate} = require("../api/BlogController")

module.exports.showBlog = (req, res) => {
    blogGetById(req, res, (blog) => {
        res.render('blog', {
            blog: blog,
            edit: req.originalUrl.match(/edit$/),
            session: req.session,
        })
    })
}

module.exports.showBlogForm = (req, res) => {
    if (req.session.user) {
        res.render('blog_form', {
            session: req.session,
        })
    } else {
        res.redirect('/login')
    }
}

module.exports.updateBlog = (req, res) => {
    req.body.id = req.params.id

    if (req.body.method === 'put') {
        blogUpdate(req, res, (blog) => {
            res.redirect(`/blog/${req.params.id}/edit`)
        })
    } else if (req.body.method === 'delete') {
        blogDelete(req, res, (blog) => {
            res.redirect(`/dashboard`)
        })
    }
}

module.exports.submitBlog = (req, res) => {
    blogCreate(req, res, (blog) => {
        res.redirect(`/dashboard`)
    })
}