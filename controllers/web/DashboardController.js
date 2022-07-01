const {blogGetById, blogGetAllByUserId} = require("../api/BlogController");

module.exports.showDashboard = (req, res) => {
    if (!req.session.user) {
        res.redirect('/login')
    } else {
        blogGetAllByUserId(req, res, req.session.user.id, (blogs) => {
            res.render('dashboard', {
                blogs: blogs,
                session: req.session,
            })
        })
    }
}