const express = require('express');
const router = express.Router();

const PagoCtrl = require('./../controllers/pago.controller');

router.get('/', PagoCtrl.getPago);
router.post('/', PagoCtrl.crearPago);

router.put('/:id', PagoCtrl.editPago);
router.delete('/:id', PagoCtrl.deletePago);

module.exports = router;