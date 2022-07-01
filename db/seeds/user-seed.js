const User = require('../../models/User')
const {passwordHash} = require("../../lib/hash")

const usernames = [
    {
        username: 'user001',
        password: passwordHash('user001'),
    },
    {
        username: 'user999',
        password: passwordHash('user999'),
    },
    {
        username: 'user_abc',
        password: passwordHash('user_abc'),
    },
    {
        username: 'user_xyz',
        password: passwordHash('user_xyz'),
    },
]

const seedCategories = () => User.bulkCreate(usernames)

module.exports = seedCategories