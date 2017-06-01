// var http = require('http');
//
// var server = http.createServer(function(request, response) {
//
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
//
// });
//
// var port = process.env.PORT || 1337;
// server.listen(port);
//
// console.log("Server running at http://localhost:%d", port);
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(1337, function () {
    console.log('Example app listening on port 1337!')
})