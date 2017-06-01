var port = process.env.PORT || 1337;
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(port, function () {
    console.log('Example app listening on port 1337!')
})