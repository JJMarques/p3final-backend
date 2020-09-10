const sequelize = require('sequelize');
const db = require('../config/database');
const Aluno = require('./aluno.model');
const Educador = require('./educador.model');

var Sala = db.define('sala', {
    id_sala: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    },
    cc_educador: {
        type: sequelize.INTEGER,
        references: {
			model: Educador,
			key: 'cc_educador'
		}
    },
    cc_aluno: {
        type: sequelize.INTEGER,
        references: {
			model: Aluno,
			key: 'cc_aluno'
		}
    },
    sala: sequelize.STRING,
}, {
    timestamps: true,
    tableName: 'sala'
});

    Educador.hasMany(Sala, {
        foreignKey: 'cc_educador',
    });

    Aluno.hasOne(Sala, {
        foreignKey: 'cc_aluno',
    });


module.exports = Sala;