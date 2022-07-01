const { User } = require('../../models')
const { Op } = require("sequelize")
const {passwordHash, checkPassword} = require("../../lib/hash")

// Show login page
module.exports.showLogin = (req, res) => {
    res.render('login', {
        session: req.session,
    })
}

// Handle login
module.exports.submitLogin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
        }
    })
    .then((user) => {
        if (user === null || !checkPassword(req.body.password, user.password)) {
            req.session.err = 'Invalid username or password'
            res.redirect('/login')
        } else {
            req.session.regenerate((err) => {
                req.session.user = user
                req.session.save((err) => {
                    res.redirect(req.session.lastPage ? req.session.lastPage : '/')
                })
            })
        }
    })
    .catch((err) => {
        res.status(500)
    })
}

// Handle logout
module.exports.submitLogout = (req, res) => {
    req.session.user = null
    req.session.save((err) => {
        req.session.regenerate((err) => {
            res.redirect('/')
        })
    })
}

// Show registration page
module.exports.showRegistration = (req, res) => {
    // Redirect logged-in user
    if (req.session.user) {
        res.redirect('/')
    }

    res.render('register')
}

// Handle registration
module.exports.submitRegistration = (req, res) => {
    User.create({
        username: req.body.username,
        password: passwordHash(req.body.password),
    })
    .then((user) => {
        req.session.regenerate((err) => {
            req.session.user = user
            req.session.save((err) => {
                res.redirect('/')
            })
        })
    })
    .catch((err) => {
        res.status(500)
    })
}
