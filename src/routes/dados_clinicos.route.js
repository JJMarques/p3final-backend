const express = require('express');
const router = express.Router();

//importar o controlador
const dadosClinicosController = require('../controllers/dados_clinicos.controller');

//endpoints da API (creches -> tabela "dados_clinicos")
router.get('/dado_clinico/ee/:cc_enc_educacao', dadosClinicosController.dados_clinicos_detail_ee); 

module.exports = router;