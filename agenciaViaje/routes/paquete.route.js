const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const PaqueteCtrl = require('./../controllers/paquete.controller');

// definiendo rutas
router.get('/', PaqueteCtrl.getPaquete);
router.post('/', PaqueteCtrl.crearPaquete);

router.put('/:id', PaqueteCtrl.editPaquete);
router.delete('/:id', PaqueteCtrl.deletePaquete);

//exportacion del modulo de rutas
module.exports = router;