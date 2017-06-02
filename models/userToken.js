var Sequelize = require('sequelize')
var sequelize = require('./../config/sequelize.js')

var UserToken = sequelize.define('user_token', {
    token: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,

        validate: {
            // size: function(value) {
            //   if(value.length != 512) {
            //     throw new Error('Token powinien zawierać 512 znaków.')
            //   }
            // }
        }
    },

    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

module.exports = UserToken
