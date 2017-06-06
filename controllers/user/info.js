var User = require('./../../models/user.js')
var UserToken = require('./../../models/userToken.js')

module.exports.main = function(request, response) {
    UserToken.findOne({
        where: {
            token: request.body.sessionToken
        }
    }).then(function (userToken) {
        if(userToken===null){
            response.status(402).json("Brak uprawnień do wyświetlenia danych")
        } else{
            User.findById(
                userToken.userId
            ).then(function(user) {
                if(user===null){
                    response.status(403).json("Użytkownik nie istnieje")
                }
                else{
                    response.status(200).json(user)
                }
            })			
			}
    })
}