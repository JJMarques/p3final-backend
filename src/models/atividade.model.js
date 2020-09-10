const sequelize = require('sequelize');
const db = require('../config/database');

var Atividade = db.define('atividade', {
    id_atividade: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    },
    sala: sequelize.STRING,
    nome_atividade: sequelize.STRING,
    data_atividade: sequelize.DATEONLY,
}, {
    timestamps: true,
    tableName: 'atividade'
});

module.exports = Atividade;