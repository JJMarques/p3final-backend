const express = require('express');
const router = express.Router();


//importar o controlador
const atividadeController = require('../controllers/atividade.controller');

//endpoints da API
router.get('/atividades', atividadeController.atividade_list); //APP
router.post('/atividade', atividadeController.atividade_create); //APP
router.put('/atividade', atividadeController.atividade_update);
router.delete('/atividade/:id', atividadeController.atividade_delete);

module.exports = router;