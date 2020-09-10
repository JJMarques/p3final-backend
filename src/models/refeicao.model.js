const sequelize = require('sequelize');
const db = require('../config/database');
const Aluno = require('./aluno.model')

var Refeicao = db.define('refeicao', {
    id_refeicao: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    },
    cc_aluno: {
        type: sequelize.INTEGER,
        references: {
			model: Aluno,
			key: 'cc_aluno'
		}
    },
    como_comeu_manha: sequelize.STRING,
    como_comeu_almoco: sequelize.STRING,
    como_comeu_tarde: sequelize.STRING,
    dia_hora: sequelize.DATEONLY,
    }, {
    timestamps: true,
    tableName: 'refeicao'
    });

    Aluno.hasMany(Refeicao, {
        foreignKey: 'cc_aluno',
      });

module.exports = Refeicao; 