const sequelize = require('sequelize');
const db = require('../config/database');
const Aluno = require('./aluno.model');
const Educador = require('./educador.model');

var Saude = db.define('saude', {
    id_saude: {
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
    sesta: sequelize.STRING,
    miccao: sequelize.STRING,
    defeccao: sequelize.STRING,
    medicamentos: sequelize.STRING,
    dose: sequelize.REAL,
    doenca: sequelize.STRING,
    sintomas: sequelize.STRING,
    data: sequelize.DATEONLY,
}, {
    timestamps: true,
    tableName: 'saude'
});

    Educador.hasMany(Saude, {
        foreignKey: 'cc_educador',
    });

    Aluno.hasMany(Saude, {
        foreignKey: 'cc_aluno',
    });


module.exports = Saude;