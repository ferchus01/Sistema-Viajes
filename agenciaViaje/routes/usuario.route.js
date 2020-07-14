const express = require('express');
const router = express.Router();

const UsuarioCtrl = require('./../controllers/usuario.controller');

router.get('/', UsuarioCtrl.getUsuario);
router.post('/', UsuarioCtrl.crearUsuario);

router.put('/:id', UsuarioCtrl.editUsuario);
router.delete('/:id', UsuarioCtrl.deleteUsuario);

module.exports = router;