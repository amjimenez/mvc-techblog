// Show home page
const {blogGetAll} = require("../api/BlogController")

module.exports.homeView = (req, res) => {
    blogGetAll(req, res, (blogs) => {
        res.render('home', {
            blogs: blogs,
            session: req.session,
        })
    })
}