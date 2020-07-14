const express = require('express');
const router = express.Router();

const AlojamientoCtrl = require('./../controllers/alojamiento.controller');

router.get('/', AlojamientoCtrl.getAlojamiento);
router.post('/', AlojamientoCtrl.crearAlojamiento);

router.put('/:id', AlojamientoCtrl.editAlojamiento);
router.delete('/:id', AlojamientoCtrl.deleteAlojamiento);

module.exports = router;