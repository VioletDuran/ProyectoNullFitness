const { Router } = require('express');
const router = Router();
const {revisarCorreo,registrarUsuario,loginUsuario,modificarDatos,devolverDatos,guardarFoto,upload,devolverRutinas, obtenerEjerciciosPrivados,obtenerEjerciciosTotales, devolverRutinasEspecifica,eliminarEjercicioDeRutina,anadirEjercicio,editarInfoRutinaPriv,guardarFotoRutina,devolverCoincidencias} = require('../controllers/index.controller');

//Gets
router.get('/users/:correo', revisarCorreo);
router.get('/users/devolverDatos/:id', devolverDatos);
router.get('/users/devolverRutinas/:id', devolverRutinas);
router.get('/users/devolverRutinasEspecifica/:id', devolverRutinasEspecifica);
router.get('/users/obtenerEjerciciosPrivados/:id',obtenerEjerciciosPrivados);
router.get('/users/obtenerEjerciciosTotales/:id',obtenerEjerciciosTotales);
router.get('/users/devolverCoincidencias/:coincidencia',devolverCoincidencias);

//Posts
router.post('/users/registro', registrarUsuario);
router.post('/users/login',loginUsuario);
router.post('/users/guardarFoto',upload.single("myFile"),guardarFoto);
router.post('/users/anadirEjercicio',anadirEjercicio);
router.post('/users/guardarFotoRutina',upload.single("myFile"),guardarFotoRutina)

//Puts
router.put('/users/modificarDatos',modificarDatos);
router.put('/users/editarInfoRutinaPriv',editarInfoRutinaPriv);

//Delete
router.delete('/users/dataEliminarEjercicioRutina',eliminarEjercicioDeRutina);
module.exports = router;