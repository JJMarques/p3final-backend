const sequelize = require('sequelize');
const db = require('../config/database');
const Aluno = require('./aluno.model');
const EncEducacao = require('./enc_educacao.model');

var DadosClinicos = db.define('dados_clinicos', {
    id_dados_clinicos: {
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
    cc_enc_educacao: {
        type: sequelize.INTEGER,
        references: {
			model: EncEducacao,
			key: 'cc_enc_educacao'
		}
    },
    c_saude: sequelize.STRING,
    medico_familia: sequelize.STRING,
    n_utente: sequelize.INTEGER,
}, {
    timestamps: true,
    tableName: 'dados_clinicos'
});

    EncEducacao.hasMany(DadosClinicos, {
        foreignKey: 'cc_enc_educacao',
    });

    Aluno.hasOne(DadosClinicos, {
        foreignKey: 'cc_aluno',
    });


module.exports = DadosClinicos;