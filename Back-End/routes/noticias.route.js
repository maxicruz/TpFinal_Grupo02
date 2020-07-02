const express = require("express");
const router = express.Router();

//defino controlador para el manejo de CRUD
const noticiasCtrl = require('./../controllers/noticias.controller');

// definiendo rutas
router.get('/', noticiasCtrl.getNoticias );            //obtener datos
router.post('/', noticiasCtrl.createNoticia);          //crea usuario
router.get('/:id', noticiasCtrl.getNoticia );			  //obtener un dato
router.put('/:id', noticiasCtrl.editNoticia);		  //actualizar datos
router.delete('/:id', noticiasCtrl.removeNoticia);	  //eliminar datos

// router.get('/', (req, res)=> { res.send('Hello Word'); });//Prueba del Servidor
// router.get('/', (req, res)=> { res.json({status:'Api Works'}); }); //Prueba de Json

//ejemploPrueva : {   "username":"empresa1",   "password":"empresa1",    "activo":"true",    "perfil":"administrativo" }

//exportacion del modulo de rutas
module.exports = router;