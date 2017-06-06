var User = require('./../../models/user.js')
var UserToken = require('./../../models/userToken')

module.exports.main = function(request, response) {

    UserToken.findOne({
        where: {
            token: request.body.sessionToken,
            $and: [
                { userId: request.body.userId }
            ]
        }
    }).then(function(userToken) {
            if(userToken !== null) {
                userToken.destroy()
                response.status(200).json("wylogowano")
            } else {
                response.status(403).json("Użytkownik nie jest zalogowany")
            }
        }, function(error) {
            response.status(402).json(error)
        })
}