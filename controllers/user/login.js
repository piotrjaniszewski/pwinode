var User = require('./../../models/user.js')
var UserToken = require('./../../models/userToken.js')

module.exports.main = function(request, response) {
    User.findOne({
        where: { email : request.body.email, $and: [{ password: request.body.password }]}
    }).then(function (user) {
        if(user!==null){
            var token = "";
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for( var i = 0; i < 32; i++ ) {
                token += chars.charAt(Math.floor(Math.random() * chars.length));
            }

            UserToken.create({
                token: token,
                userId: user.id
            }).then(function (userToken) {
                var responseObject = {
                    userId: user.id,
                    sessionToken: userToken.token
                }
                response.status(200).json(responseObject)
            }),function (error) {
                response.status(401).json(error)
            }
        }
        else{
            response.status(403).json("Błędny email lub hasło")
        }

    })



}
