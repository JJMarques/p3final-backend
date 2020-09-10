const Aluno = require("../models/aluno.model");
const sequelize = require("../config/database");

const Sala = require("../models/sala.model")
const DadosClinicos = require("../models/dados_clinicos.model.js")


const controllers = {};

controllers.aluno_list_educador = async (req, res) => {
  const {cc_educador} = req.params;
  const dados = await Aluno.findAll({include: [{all: true}], where: { '$Sala.cc_educador$': cc_educador } })
      .then(function (dados) {
          return dados;
      })
      .catch((error) => {
          res.status(500).send({
              message: error.message || "Ocorreu um erro ao carregar os dados dos alunos.",
          });
      });

  console.log(dados);
  res.json({
      success: true,
      dados: dados
  });
};

  
  module.exports = controllers;