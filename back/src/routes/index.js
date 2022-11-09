const { Router } = require('express');
const router = Router();
const {revisarCorreo,registrarUsuario,loginUsuario,modificarDatos,devolverDatos} = require('../controllers/index.controller');

//Gets
router.get('/users/:correo', revisarCorreo);
router.get('/users/devolverDatos/:id', devolverDatos);

//Posts
router.post('/users/registro', registrarUsuario);
router.post('/users/login',loginUsuario);

//Puts
router.put('/users/modificarDatos',modificarDatos);

module.exports = router;