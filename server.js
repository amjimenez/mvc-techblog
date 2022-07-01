const express = require('express')
const handlebars = require('express-handlebars')
const routes = require('./routes')
const session = require('express-session')

const app = express()
const port = process.env.PORT || 3001
const maxAge = 3600 * 1000 // one hour in milliseconds

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
let hbs = handlebars.create()
hbs.handlebars.registerHelper('dateFormat', require('handlebars-dateformat'))
hbs.handlebars.registerHelper('ifCond', require('./lib/handlebars-helpers/ifcond'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    cookie: {
        expires: new Date(Date.now() + maxAge),
        maxAge: maxAge,
    },
    secret: 'SessionSecret'
}))
app.use(routes)

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})
