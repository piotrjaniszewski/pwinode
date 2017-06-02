var Sequelize = require('sequelize')
var sequelize = require('./../config/sequelize.js')

var User = sequelize.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: {
            msg: 'Ten adres e-mail jest już w użyciu'
        },
        allowNull: false,

        validate: {
            isEmail: {
                msg: 'To nie jest prawidłowy adres e-mail'
            },
            len: {
                args: [4, 255],
                msg: 'Adres e-mail może zawierać od 4 do 255 znaków.'
            },
        }
    },

    firstName: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            len: {
                args: [2, 255],
                msg: 'Imię może zawierać od 4 do 255 znaków.'
            },
        }
    },

    lastName: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            len: {
                args: [2, 255],
                msg: 'Nazwisko może zawierać od 4 do 255 znaków.'
            },
        }
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            len: {
                args: [6, 255],
                msg: 'Hasło może zawierać od 6 do 255 znaków.'
            },
        }
    },

    country: {
        type: Sequelize.STRING,
        allowNull: false
    },

    question: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    answer: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User