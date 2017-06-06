var User = require('./../../models/user.js')
var UserToken = require('./../../models/userToken.js')

module.exports.main = function(request, response) {
    UserToken.findOne({
        where: {
            token: request.body.sessionToken
        }
    }).then(function (UserToken) {
        if(UserToken===null){
            response.status(404).json("Brak uprawnień do edycji danych")
        }
        else{
            User.findById(
                request.body.userId
            ).then(function(user) {
                if(user === null){
                    response.status(404).json("Użytkownik nie istnieje")
                } else{
                    user.update({
                        firstName: request.body.firstName,
                        lastName: request.body.lastName,
                        country: request.body.country,
                    }).then(function (us) {
                        response.status(200).json(us)
                    })
                }
            })
        }
    })
}