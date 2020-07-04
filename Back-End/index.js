var express = require('express');
var app = express();

const {mongoose} = require('./database')
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas para puntos
app.use('/api/usuarios', require('./routes/usuarios.route'));
app.use('/api/afiliados', require('./routes/afiliados.route'));
app.use('/api/noticias', require('./routes/noticias.route'));
app.use('/api/novedades', require('./routes/novedades.route'));
app.use('/api/pagos', require('./routes/pagos.route'));

//setting
app.set('port', process.env.PORT || 3000);

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});