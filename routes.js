
var userCreate  = require('./controllers/user/register')

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.send('Hello World!')
    })

    app.post('/user/register', userCreate.main);
};