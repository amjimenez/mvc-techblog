const {Blog, Comment} = require('../../models')

module.exports.blogGetAll = function(req, res, callback = null) {
    Blog.findAll({
        include: {
            all: true,
            nested: true,
        },
        order: [
            ['updated_at', 'DESC'],
        ],
    })
    .then((blogs) => {
        if (callback) {
            return callback(blogs)
        }

        res.status(200).json(blogs)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

module.exports.blogGetById = function(req, res, callback = null) {
    Blog.findOne({
        where: {
           id: req.params.id
        },
        include: {
            all: true,
            nested: true,
        },
    })
    .then((blog) => {
        if (callback) {
            return callback(blog)
        }

        if (blog === null) {
            res.status(404).json({
                status: 404,
                reason: "Blog not found",
            })
        }
        res.status(200).json(blog)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

module.exports.blogGetAllByUserId = function(req, res, user_id, callback = null) {
    Blog.findAll({
        where: {
            user_id: user_id,
        },
        order: [
            ['updated_at', 'DESC'],
        ],
        include: {
            all: true,
            nested: true,
        },
    })
    .then((blogs) => {
        if (callback) {
            return callback(blogs)
        }

        res.status(200).json(blogs)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

module.exports.blogCreate = function(req, res, callback = null) {
    Blog.create(req.body)
    .then((blog) => {
        if (callback) {
            return callback(blog)
        }

        res.status(200).json(blog)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
}

module.exports.blogUpdate = function(req, res, callback = null) {
    Blog.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then((blog) => {
        return Blog.findOne({
            where: {
                id: req.params.id
            },
        })
    })
    .then((blog) => {
        if (callback) {
            return callback(blog)
        }

        res.status(200).json(blog)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

module.exports.blogDelete = function(req, res, callback = null) {
    Comment.destroy({
        where: {
            blog_id: req.params.id,
        },
    })
    .then((data) => {
        Blog.destroy({
            where: {
                id: req.params.id,
            },
        })
    })
    .then((data) => {
        if (callback) {
            return callback(data)
        }

        res.status(200).json({id: req.params.id, "deleted": true})
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}