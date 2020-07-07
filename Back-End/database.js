const mongoose = require('mongoose');

// librerias que fueron actualizadas 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const URI = 'mongodb://localhost/mean-cruds';
// mongoose.connect(URI)
mongoose.connect('mongodb+srv://admin:admin@prolivebackend.qtxgc.mongodb.net/<dbname>?retryWrites=true&w=majority')
.then(db=>console.log('DB is connected'))
.catch(err=>console.error(err))
module.exports = mongoose;