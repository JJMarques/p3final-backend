const express = require('express');
const router = express.Router();

//importar o controlador
const saudeController = require('../controllers/saude.controller');

//endpoints da API (creches -> tabela "saude")
router.get('/saudetoday/:cc_aluno', saudeController.saude_detail_today); //APP
router.post('/saudetoday/', saudeController.saude_create_today); //APP
router.put('/saude/:id', saudeController.saude_update);
router.delete('/saude/:id', saudeController.saude_delete);

module.exports = router;