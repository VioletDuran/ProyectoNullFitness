const { Router } = require('express');
const router = Router();
const {revisarCorreo,registrarUsuario,loginUsuario,modificarDatos,devolverDatos,guardarFoto,upload,devolverRutinas, obtenerEjerciciosPrivados,obtenerEjerciciosTotales, devolverRutinasEspecifica,eliminarEjercicioDeRutina} = require('../controllers/index.controller');

//Gets
router.get('/users/:correo', revisarCorreo);
router.get('/users/devolverDatos/:id', devolverDatos);
router.get('/users/devolverRutinas/:id', devolverRutinas);
router.get('/users/devolverRutinasEspecifica/:id', devolverRutinasEspecifica);
router.get('/users/obtenerEjerciciosPrivados/:id',obtenerEjerciciosPrivados);
router.get('/users/obtenerEjerciciosTotales/:id',obtenerEjerciciosTotales);

//Posts
router.post('/users/registro', registrarUsuario);
router.post('/users/login',loginUsuario);
router.post('/users/guardarFoto',upload.single("myFile"),guardarFoto);

//Puts
router.put('/users/modificarDatos',modificarDatos);

//Delete
router.delete('/users/dataEliminarEjercicioRutina',eliminarEjercicioDeRutina);
module.exports = router;