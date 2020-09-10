const sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./user.model');
const Parentesco = require('./parentesco.model');

var EncEducacao = db.define('enc_educacao', {
    cc_enc_educacao: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: false
    },
    nome: sequelize.STRING,
    morada: sequelize.STRING,
    nif: sequelize.INTEGER,
    email: sequelize.STRING,
}, {
    timestamps: true,
    tableName: 'enc_educacao'
});

User.belongsTo(EncEducacao, {foreignKey: 'cc_enc_educacao'});
Parentesco.belongsTo(EncEducacao, {foreignKey: 'cc_enc_educacao'});

module.exports =EncEducacao;