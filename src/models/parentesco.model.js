const sequelize = require('sequelize');
const db = require('../config/database');

var Parentesco = db.define('parentesco', {
    id_parentesco: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    },
    grau: sequelize.STRING,
    observacoes: sequelize.STRING
}, {
    timestamps: true,
    tableName: 'parentesco'
});



module.exports = Parentesco;