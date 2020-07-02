const express = require('express');
const router = express.Router();

const afiliadoCtrl = require('../controllers/afiliado.controller');

router.get('/', afiliadoCtrl.getAfiliados);
router.post('/', afiliadoCtrl.createAfiliado);
router.get('/:id', afiliadoCtrl.getAfiliado);
router.put('/:id', afiliadoCtrl.editAfiliado);
router.delete('/:id', afiliadoCtrl.deleteAfiliado);

module.exports = router