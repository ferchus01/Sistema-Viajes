const express = require('express');
const router = express.Router();

const TarjetaCtrl = require('./../controllers/tarjeta.controller');

router.get('/', TarjetaCtrl.getTarjeta);
router.post('/', TarjetaCtrl.crearTarjeta);

router.put('/:id', TarjetaCtrl.editTarjeta);
router.delete('/:id', TarjetaCtrl.deleteTarjeta);

module.exports = router;