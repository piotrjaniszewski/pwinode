var User = require('./../../models/user.js')
var UserToken = require('./../../models/userToken.js')

module.exports.main = function(request, response) {

    User.findOne({
        where: {
            email: request.body.email
        }
    }).then(function (user) {
        if(user===null){
            response.status(402).json("Użytkownik nie istnieje")
        }
        else{
            if(user.question===request.body.question && user.answer===request.body.answer){
                user.update({
                    password:request.body.password
                }).then(function (user) {
                    response.status(200).json("Pomyślnie zmieniono hasło")
                },function (error) {
                    response.status(404).json(error)
                })
            } else {
                response.status(402).json("Podano błędne dane")
            }
        }
    },function (error) {
        response.status(404).json(error)
        }
    )
}