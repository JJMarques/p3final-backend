const express = require('express');
const router = express.Router();

//importar o controlador
const refeicaoController = require('../controllers/refeicao.controller');

//endpoints da API (creches -> tabela "refeicao")
router.get('/refeicaotoday/:cc_aluno', refeicaoController.refeicao_detail_today); //APP
router.post('/refeicaotoday/', refeicaoController.refeicao_create_today); //APP
router.put('/refeicaotoday/:id_refeicao', refeicaoController.refeicao_update_today); //APP
router.delete('/refeicao/:id', refeicaoController.refeicao_delete); //APP

module.exports = router;