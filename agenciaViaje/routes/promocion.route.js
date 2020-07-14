const express = require('express');
const router = express.Router();

const PromocionCtrl = require('./../controllers/promocion.controller');

router.get('/', PromocionCtrl.getPromocion);
router.post('/', PromocionCtrl.crearPromocion);

router.put('/:id', PromocionCtrl.editPromocion);
router.delete('/:id', PromocionCtrl.deletePromocion);

module.exports = router;