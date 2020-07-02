const Novedad = require('../models/novedad');

const novedadCtrl = {}

// Listados de Novedades
novedadCtrl.getNovedades = async(req, res) => {
  const novedades = await Novedad.find().populate("usuario");
  res.json(novedades);
}

// Obtener Novedad por ID
novedadCtrl.getNovedade = async(req, res) => {
  const novedades = await Novedad.findById(req.params.id);
  res.json(novedades);
}

// Crear Novedad
novedadCtrl.createNovedad = async(req, res) => {
  const novedad = new Novedad(req.body);
  await novedad.save();
  res.json({
    'status': 'Novedad Saved'
  });
}

// Modificación de Novedad
novedadCtrl.editNovedad = async(req, res) => {
  const vNovedad = new Novedad(req.body);
  await Novedad.findByIdAndUpdate(req.params.id, { $set: vNovedad }, { new: true });
  res.json({
    'status': 'Novedad Updated'
  });
}

// Baja de Novedad
novedadCtrl.deleteNovedad = async(req, res) => {
  await Novedad.findByIdAndRemove(req.params.id);
  res.json({
    'status': 'Novedad Removed'
  });
}

module.exports = novedadCtrl;