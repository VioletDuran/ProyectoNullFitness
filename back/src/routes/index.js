const { Router } = require('express');
const router = Router();
const {revisarCorreo,registrarUsuario,loginUsuario,modificarDatos,devolverDatos,guardarFoto,upload} = require('../controllers/index.controller');

//Gets
router.get('/users/:correo', revisarCorreo);
router.get('/users/devolverDatos/:id', devolverDatos);

//Posts
router.post('/users/registro', registrarUsuario);
router.post('/users/login',loginUsuario);
router.post('/users/guardarFoto',guardarFoto);

//Puts
router.put('/users/modificarDatos',modificarDatos);

module.exports = router;