const express = require('express');
const router = express.Router();

const TransporteCtrl = require('./../controllers/transporte.controller');

router.get('/', TransporteCtrl.getTransporte);
router.post('/', TransporteCtrl.crearTransporte);

router.put('/:id', TransporteCtrl.editTransporte);
router.delete('/:id', TransporteCtrl.deleteTransporte);

module.exports = router;