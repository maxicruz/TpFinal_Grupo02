const express = require('express');
const router = express.Router();

const pagoCtrl = require('./../controllers/pago.controller');

router.get('/', pagoCtrl.getPagos);
router.post('/', pagoCtrl.createPago);
router.get('/:id', pagoCtrl.getPago);
router.put('/:id', pagoCtrl.editPago);
router.delete('/:id', pagoCtrl.deletePago);

module.exports = router;