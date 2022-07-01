// import models
const Blog = require('./Blog')
const Comment = require('./Comment')
const User = require('./User')

// Comment belongs to Blog
Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
})

// Blogs have many Comments
Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
})

Blog.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Blog, {
    foreignKey: 'user_id',
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Comment, {
    foreignKey: 'user_id',
})

module.exports = {
    Blog,
    Comment,
    User
}