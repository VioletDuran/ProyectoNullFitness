const { Router } = require('express');
const router = Router();
const {revisarCorreo,registrarUsuario,loginUsuario,modificarDatos,devolverDatos,guardarFoto,upload,devolverRutinas} = require('../controllers/index.controller');

//Gets
router.get('/users/:correo', revisarCorreo);
router.get('/users/devolverDatos/:id', devolverDatos);
router.get('/users/devolverRutinas/:id', devolverRutinas);

//Posts
router.post('/users/registro', registrarUsuario);
router.post('/users/login',loginUsuario);
router.post('/users/guardarFoto',upload.single("myFile"),guardarFoto);

//Puts
router.put('/users/modificarDatos',modificarDatos);

module.exports = router;