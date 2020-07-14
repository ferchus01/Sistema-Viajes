const express = require('express');
const router = express.Router();

const FormaPagoCtrl = require('./../controllers/formpago.controller');

router.get('/', FormaPagoCtrl.getFormaPago);
router.post('/', FormaPagoCtrl.crearFormaPago);

router.put('/:id', FormaPagoCtrl.editFormaPago);
router.delete('/:id', FormaPagoCtrl.deleteFormaPago);

module.exports = router;