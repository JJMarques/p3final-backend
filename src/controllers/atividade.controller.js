const Atividade = require("../models/atividade.model");
const sequelize = require("../config/database");

const controllers = {};

//função do endpoint /alunos
controllers.atividade_list = async (req, res) => {
  const dados = await Atividade.findAll()
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados das atividades.",
      });
    });

  console.log(dados);
  res.json({
    success: true,
    dados: dados,
  });
};


controllers.atividade_create = async (req, res) => {
  const { sala, nome_atividade, data_atividade } = req.body;
  const dados = await Atividade.create({
    sala: sala,
    nome_atividade: nome_atividade,
    data_atividade: data_atividade,
  })
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar submeter a atividade.",
      });
    });

  res.status(201).json({
    success: true,
    dados: dados,
  });
};

controllers.atividade_update = async (req, res) => {
  const { id_atividade, sala, nome_atividade, data_atividade } = req.body;
  const dados = await Atividade.update(
    {
        id_atividade: id_atividade,
        sala: sala,
        nome_atividade: nome_atividade,
        data_atividade: data_atividade,
    },
    {
      where: { id_atividade: id_atividade },
    }
  )
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualizar os dados da atividade.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.atividade_delete = async (req, res) => {
  const id_atividade = req.params.id;
  const dados = await Atividade.destroy({ where: { id_atividade: id_atividade } }).catch((error) => {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao tentar remover a atividade.",
    });
  });

  res.status(204).json({
    success: true,
    dados: dados,
  });
};

module.exports = controllers;


