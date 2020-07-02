const Usuario = require('../models/usuario');

const usuarioCtrl = {}

// Listado de Usuarios
usuarioCtrl.getUsuarios = async(req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
}

// Obtener Usuario por ID
usuarioCtrl.getUsuario = async(req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario);
}

// Alta de Usuario
usuarioCtrl.createUsuario = async(req, res) => {
  const usuario = new Usuario(req.body);
  await usuario.save();
  res.json({
    'status': 'Usuario Saved'
  });
}

// Modificación de Usuario
usuarioCtrl.editUsuario = async(req, res) => {
  const vUsuario = new Usuario(req.body);
  await Usuario.findByIdAndUpdate(req.params.id, { $set: vUsuario }, { new: true });
  res.json({
    'status': 'Usuario Updated'
  });
}

usuarioCtrl.deleteUsuario = async(req, res) => {
  await Usuario.findByIdAndRemove(req.params.id);
  res.json({
    'status': 'Usuario Removed'
  });
}

usuarioCtrl.loginUsuario = async (req, res)=>{

  const criteria = {
      usuario: req.body.usuario,
      password: req.body.password
  } 

  Usuario.findOne(criteria, function(err, user) {

      if (err) {
          res.json({
              status: 0,
              message: 'error'})
      };
      if (!user) {
          res.json({
              status: 0,
              message: "not found" })
      } else {
          res.json({
              status: 1,
              message: "success",
              usuario: user.usuario,
              activo: user.activo,
              perfil: user.perfil });
      }
  })
}

module.exports = usuarioCtrl;