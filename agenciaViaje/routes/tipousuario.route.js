const express = require('express');
const router = express.Router();

const TipoUsuarioCtrl = require('./../controllers/tipousuario.controller');

router.get('/', TipoUsuarioCtrl.getTipoUsuario);
router.post('/', TipoUsuarioCtrl.crearTipoUsuario);

router.put('/:id', TipoUsuarioCtrl.editTipoUsuario);
router.delete('/:id', TipoUsuarioCtrl.deleteTipoUsuario);

module.exports = router;