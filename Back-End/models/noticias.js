const mongoose = require("mongoose");
const Usuario = require('./usuario');
const {Schema} = mongoose;

const NoticiasSchema = new Schema({
titulo: { type: String, required: true }, 
descripcion: { type: String, required:true },
fecha: { type: Date, required:true},
usuario:{ type: String, required:true }, //todos o socios
vigente: { type: Boolean, required:true },
imgnoticia: { type: String, required:true }
});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.model('Noticias', NoticiasSchema);