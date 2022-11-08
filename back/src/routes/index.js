const { Router } = require('express');
const router = Router();
const {revisarCorreo,registrarUsuario,loginUsuario} = require('../controllers/index.controller');

//get
router.get('/users/:correo', revisarCorreo);

//Posts
router.post('/users/registro', registrarUsuario);
router.post('/users/login',loginUsuario);

module.exports = router;