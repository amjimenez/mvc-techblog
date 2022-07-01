const Comment = require("../../models/Comment")

module.exports.commentGetAll = function(req, res, callback = null) {
    Comment.findAll({
        include: {
            all: true,
            nested: true,
        },
    })
    .then((comments) => {
        if (callback) {
            return callback(comments)
        }

        res.status(200).json(comments)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

module.exports.commentGetById = function(req, res, callback = null) {
    Comment.findOne({
        where: {
            id: req.params.id
        },
        include: {
            all: true,
            nested: true,
        },
    })
    .then((comment) => {
        if (callback) {
            return callback(comment)
        }

        if (comment === null) {
            res.status(404).json({
                status: 404,
                reason: "Comment not found",
            })
        }
        res.status(200).json(comment)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

module.exports.commentCreate = function(req, res, callback = null) {
    Comment.create(req.body)
    .then((comment) => {
        if (callback) {
            return callback(comment)
        }

        res.status(200).json(comment)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
}

module.exports.commentUpdate = function(req, res, callback = null) {
    Comment.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then((comment) => {
        return Comment.findOne({
            where: {
                id: req.params.id
            },
        })
    })
    .then((comment) => {
        if (callback) {
            return callback(comment)
        }

        res.status(200).json(comment)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

module.exports.commentDelete = function(req, res, callback = null) {
    Comment.destroy({
        where: {
            id: req.params.id,
        },
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