const express = require('express');
const router = express.Router();

const ReservaCtrl = require('./../controllers/reserva.controller');

router.get('/', ReservaCtrl.getReserva);
router.post('/', ReservaCtrl.crearReserva);

router.put('/:id', ReservaCtrl.editReserva);
router.delete('/:id', ReservaCtrl.deleteReserva);

module.exports = router;