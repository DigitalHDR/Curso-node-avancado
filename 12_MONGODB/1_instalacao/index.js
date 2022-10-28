const express = require('express')
const {engine } = require('express-handlebars')

const app = express()

const conn = require('./bd/conn')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')


// read body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.listen(3000)