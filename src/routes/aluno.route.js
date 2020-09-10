const express = require('express');
const router = express.Router();

//importar o controlador
const alunoController = require('../controllers/aluno.controller');

//endpoints da API (creches -> tabela "aluno")
router.get('/alunos/educ/:cc_educador', alunoController.aluno_list_educador); //APP

module.exports = router;
