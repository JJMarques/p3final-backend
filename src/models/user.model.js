const sequelize = require('sequelize');
const db = require('../config/database');
//const EncEducacao = require('./enc_educacao.model');
//const Educador = require('./educador.model');


var User = db.define('user', {
    id_user: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    },
    username: sequelize.STRING, 
    password: sequelize.STRING,
    tipo: sequelize.INTEGER,
}, {
    timestamps: true,
    tableName: 'user'
});

    //User.hasOne(Educador, {foreignKey: 'cc_educador'});
    
                    //User.belongsTo(Educador);
                    //Educador.hasOne(User, {
                    //  foreignKey: 'cc_educador',
                    //});
                    

                /* EncEducacao.hasOne(User, {
                        foreignKey: 'cc_enc_educacao',
                    }); */
                //EncEducacao.belongsTo(User); 
                //Educador.belongsTo(User);

module.exports = User;