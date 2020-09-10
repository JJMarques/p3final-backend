const sequelize = require('sequelize');
const db = require('../config/database');
const Parentesco = require('./parentesco.model');

var Aluno = db.define('aluno', {
    cc_aluno: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: false
    },
    nome: sequelize.STRING,
    data_nascimento: sequelize.DATEONLY,
    genero: sequelize.STRING,
    morada: sequelize.STRING,
    autorizacao_filmagem: sequelize.TEXT,
}, {
    timestamps: true,
    tableName: 'aluno'
});

Parentesco.belongsTo(Aluno, {foreignKey: 'cc_aluno'});

module.exports = Aluno;