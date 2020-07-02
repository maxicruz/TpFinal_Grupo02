const express = require('express');
const router = express.Router();

const novedadCtrl = require('./../controllers/novedad.controller');

router.get('/', novedadCtrl.getNovedades);
router.post('/', novedadCtrl.createNovedad);
router.put('/:id', novedadCtrl.editNovedad);
router.delete('/:id', novedadCtrl.deleteNovedad);

module.exports = router;