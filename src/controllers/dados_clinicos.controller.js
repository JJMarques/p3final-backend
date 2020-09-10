const DadosClinicos = require("../models/dados_clinicos.model");
const sequelize = require("../config/database");

const controllers = {};


controllers.dados_clinicos_detail_ee = async (req, res) => {
  const { cc_enc_educacao } = req.params;
  const dados = await DadosClinicos.findAll({ where: { cc_enc_educacao: cc_enc_educacao } })
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados clinicos do aluno.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};


module.exports = controllers;
