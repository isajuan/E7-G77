import express from 'express';
import morgan  from'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//Conexión a bse de datos
const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/prueba';
const uri='mongodb://juanme:isajuan0509@cluster0-shard-00-00.ndspf.mongodb.net:27017,cluster0-shard-00-01.ndspf.mongodb.net:27017,cluster0-shard-00-02.ndspf.mongodb.net:27017/Restaurante?ssl=true&replicaSet=atlas-wmom2y-shard-0&authSource=admin&retryWrites=true&w=majority';


const options = {useNewUrlParser: true,  useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB'); },
    err => { console.log(err); } 
);

//MIDDLEWARES
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}));


//RUTA
app.use('/api', require('./routes/clientes'));
app.use('/api', require('./routes/menus'));
app.use('/api', require('./routes/pedidos'));

//Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
//PUERTO

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function(){
    console.log('Example app listening on port '+ app.get('puerto'));
});