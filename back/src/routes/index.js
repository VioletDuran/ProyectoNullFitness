const { Router } = require('express');
const router = Router();
const {revisarCorreo,registrarUsuario} = require('../controllers/index.controller');


router.post('/users', revisarCorreo);
router.post('/users/registro', registrarUsuario);

module.exports = router;