const Noticias = require('../models/noticias'); 
// Funciones de la Base de Datos
const noticiaCtrl = {};

//Trae todos los Datos o Noticias Registrado  
noticiaCtrl.getNoticias = async(req, res)=> { 
    const mens = await Noticias.find();
    res.json(mens);   
}

//Crea o Registra una Mensaje
noticiaCtrl.createNoticia = async(req, res)=> {   
    //en req.body se espera que vengan los datos de usuario a crear
	const mensi = new Noticias(req.body);
    console.log(mensi);
    await mensi.save();
    res.json({'status':'Mensaje Created and Saved'});
};
//Trae un Dato o Mensaje Registrada  
noticiaCtrl.getNoticia = async (req, res, next) => {
    const { id } = req.params;
    const mensa = await Noticias.findById(id);
    res.json(mensa);
};

//Modifica una Mensaje
noticiaCtrl.editNoticia = async (req, res, next) => {
    const { id } = req.params;
    const mensaj = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        usuario: req.body.usuario,
		vigente: req.body.vigente,
		imgnoticia: req.body.imgnoticia
    };
    await Noticias.findByIdAndUpdate(id, {$set: mensaj}, {new: true});
    res.json({status: 'Noticias Updated'});
};

//Elimina una Mensaje
noticiaCtrl.removeNoticia = async (req, res, next) => {
    await Noticias.findByIdAndRemove(req.params.id);
    res.json({status: 'Noticias Deleted'});
};

module.exports = noticiaCtrl;