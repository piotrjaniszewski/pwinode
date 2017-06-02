var register = require('./controllers/user/register')
var editUser = require('./controllers/user/editUser')
var info = require('./controllers/user/info')
var login = require('./controllers/user/login')
var logout = require('./controllers/user/logout')
var resetPassword = require('./controllers/user/resetPassword')

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.send('Hello World!')
    })

    app.post('/user/register', register.main);
    app.post('/user/edit', editUser.main);
    app.post('/user/info', info.main);
    app.post('/user/login', login.main);
    app.post('/user/logout', logout.main);
    app.post('/user/resetPassword', resetPassword.main);

};