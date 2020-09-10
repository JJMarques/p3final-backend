const sequelize = require('sequelize');
const ligacao = new sequelize('creche', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = ligacao;
