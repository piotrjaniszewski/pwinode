var User = require('./../../models/user.js')

module.exports.main = function(request, response) {
    User.findOne({
        where: {
            email: request.body.email
        }
    }).then(function (us) {
        if(us===null){
            User.create({
                email: request.body.email,
                firstName: request.body.firstName,
                lastName: request.body.lastName,
                password: request.body.password,
                country: request.body.country,
                question:request.body.question,
                answer: request.body.answer
            }).then(function (user) {
                response.status(200).json(user)
            },
            function (error) {
                response.status(404).json(error)
            })
        } else {
            response.status(404).json("Adres email jest zajęty")
        }
    })
}