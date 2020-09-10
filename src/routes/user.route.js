const express = require('express');
const router = express.Router();

//importar o controlador
const userController = require('../controllers/user.controller');

//endpoints da API (creches -> tabela "user")
router.get('/user/:username', userController.user_detail); //APP

module.exports = router;