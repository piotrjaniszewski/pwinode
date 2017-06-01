var port = process.env.PORT || 1337;
// const express = require('express')
// const app = express()
//
// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })
//
// app.listen(port, function () {
//     console.log('Example app listening on port 1337!')
// })

var express = require('express')
var cors = require('cors')
var Sequelize = require('sequelize')
var bodyParser = require('body-parser')
var routes = require('./routes.js')

var app = express()
app.use(cors())
app.use(bodyParser.json())
routes(app)

app.listen(port)
console.log('Server started at port 3000 ...')
