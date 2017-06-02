var User = require('./../../models/user.js')
var UserToken = require('./../../models/userToken.js')

module.exports.main = function(request, response) {
    UserToken.findOne({
        where: {
            token: request.body.sessionToken
        }
    }).then(function (UserToken) {
        if(UserToken===null){
            response.status(404).json("Brak uprawnień do wyświetlenia danych")
        }else{
            User.findById(
                request.body.userId
            ).then(function(user) {
                if(user===null){
                    response.status(200).json("Użytkownik nie istnieje")
                }
                else{
                    response.status(200).json(user)
                }
            })
        }
    })
}