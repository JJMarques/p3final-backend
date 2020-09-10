const Refeicao = require("../models/refeicao.model");
const sequelize = require("../config/database");

const controllers = {};


controllers.refeicao_detail_today = async (req, res) => {
  const { cc_aluno } = req.params;

  const d = new Date();
  var data_today = d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate();

  const dados = await Refeicao.findAll({ where: { dia_hora: data_today, cc_aluno: cc_aluno } })
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados da refeição.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.refeicao_create_today = async (req, res) => {
  const { cc_aluno, como_comeu_manha, como_comeu_almoco, como_comeu_tarde } = req.body;

  const d = new Date();
  var data_today = d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate();

  const dados = await Refeicao.create({
    cc_aluno: cc_aluno,
    como_comeu_manha: como_comeu_manha,
    como_comeu_almoco: como_comeu_almoco,
    como_comeu_tarde: como_comeu_tarde,
    dia_hora: data_today
  })
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar submeter a refeição.",
      });
    });

  res.status(201).json({
    success: true,
    dados: dados,
  });
};


controllers.refeicao_update_today = async (req, res) => {

  const { id_refeicao } = req.params;
  const { cc_aluno, como_comeu_manha, como_comeu_almoco, como_comeu_tarde } = req.body;

  const d = new Date();
  var data_today = d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate();

  const dados = await Refeicao.update(
    {
        id_refeicao: id_refeicao,
        cc_aluno: cc_aluno,
        como_comeu_manha: como_comeu_manha,
        como_comeu_almoco: como_comeu_almoco,
        como_comeu_tarde: como_comeu_tarde,
        dia_hora: data_today
    },
    {
      where: { id_refeicao: id_refeicao },
    }
  )
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualizar os dados da refeição.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};


controllers.refeicao_delete = async (req, res) => {
  const id_refeicao = req.params.id;
  const dados = await Refeicao.destroy({ where: { id_refeicao: id_refeicao } }).catch((error) => {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao tentar remover a refeição.",
    });
  });

  res.status(204).json({
    success: true,
    dados: dados,
  });
};

module.exports = controllers;
