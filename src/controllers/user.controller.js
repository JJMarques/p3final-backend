const User = require("../models/user.model");
const sequelize = require("../config/database");

const EncEducacao = require("../models/enc_educacao.model");
const Educador = require("../models/educador.model");


const controllers = {};
//sequelize.sync()


controllers.user_detail = async (req, res) => {
  const {username} = req.params;
  const dados = await User.findAll({include: [{all: true}], where: { username: username }}  )
    .then(function (dados) {
      return res.json({ success: true, dados: dados });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados do utilizador.",
      });
    });

  
};


module.exports = controllers;
