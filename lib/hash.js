const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports.passwordHash = (password) => bcrypt.hashSync(password, saltRounds)
module.exports.checkPassword = (password, hash) => bcrypt.compareSync(password, hash)