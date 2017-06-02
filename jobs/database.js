var User = require('./../models/user.js')
var UserToken = require('./../models/userToken.js')
User.sync({ force: true })
UserToken.sync({force: true})