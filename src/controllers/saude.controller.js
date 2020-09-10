const Saude = require("../models/saude.model");
const sequelize = require("../config/database");

const controllers = {};



controllers.saude_detail_today = async (req, res) => {
  const {cc_aluno} = req.params;

  const d = new Date();
  var data_today = d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate();

  const dados = await Saude.findAll({ where: { cc_aluno: cc_aluno, data: data_today } })
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados da saúde do aluno.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};


controllers.saude_create_today = async (req, res) => {
  const { id_saude, cc_educador, cc_aluno, sesta, miccao, defeccao, medicamentos, dose, doenca, sintomas } = req.body;
  const d = new Date();
  var data_today = d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate();

  const dados = await Saude.create({
    id_saude: id_saude,
    cc_educador: cc_educador,
    cc_aluno: cc_aluno,
    sesta: sesta,
    miccao: miccao,
    defeccao: defeccao,
    medicamentos: medicamentos,
    dose: dose,
    doenca: doenca,
    sintomas: sintomas,
    data: data_today
  })
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar submeter a saude.",
      });
    });

  res.status(201).json({
    success: true,
    dados: dados,
  });
};

controllers.saude_update = async (req, res) => {
  const { id_saude, cc_educador, cc_aluno, sesta, miccao, defeccao, medicamentos, dose, doenca, sintomas, data } = req.body;
  const dados = await Saude.update(
    {
        id_saude: id_saude,
        cc_educador: cc_educador,
        cc_aluno: cc_aluno,
        sesta: sesta,
        miccao: miccao,
        defeccao: defeccao,
        medicamentos: medicamentos,
        dose: dose,
        doenca: doenca,
        sintomas: sintomas,
        data: data
    },
    {
      where: { id_saude: id_saude },
    }
  )
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualizar os dados da saúde.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.saude_delete = async (req, res) => {
  const id_saude = req.params.id;
  const dados = await Saude.destroy({ where: { id_saude: id_saude } }).catch((error) => {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao tentar remover a saude.",
    });
  });

  res.status(204).json({
    success: true,
    dados: dados,
  });
};

module.exports = controllers;
