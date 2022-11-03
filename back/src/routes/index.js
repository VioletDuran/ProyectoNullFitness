const { Router } = require('express');
const router = Router();
const {getUsers,registrarUsuario} = require('../controllers/index.controller');


//router.get('/users', getUsers);
router.post('/users', registrarUsuario);

module.exports = router;