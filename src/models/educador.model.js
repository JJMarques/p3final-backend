const sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./user.model');

var Educador = db.define('educador', {
    cc_educador: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: false
    },
    nome: sequelize.STRING,
    email: sequelize.STRING,
    morada: sequelize.STRING,
    nif: sequelize.INTEGER,
    telemovel: sequelize.INTEGER,
}, {
    timestamps: true,
    tableName: 'educador'
});

User.belongsTo(Educador, {foreignKey: 'cc_educador'});

module.exports = Educador;