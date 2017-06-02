var Sequelize = require('sequelize');
const sequelize = new Sequelize('PWIdatabase', 'piotrjaniszewski', 'Qwerty_123', {
    host: 'pwi.database.windows.net',
    dialect: 'mssql',
    dialectOptions : {
        encrypt: true // Use this if you're on Windows Azure
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

module.exports = sequelize;
