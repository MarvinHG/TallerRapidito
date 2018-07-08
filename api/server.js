'use strict';

const express = require('express'),
    app = express(), 
    path = require('path'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose');


let db = mongoose.connection,
    dbUrl = 'mongodb://admin123:admin123@ds129821.mlab.com:29821/db_taller_rapidito',
    port= 4000;

let server = app.listen(port, _server());

mongoose.connect(dbUrl);

db.on('error', console.error.bind(console, 'Error de conexion: '));

db.once('open', ()=>{
    console.log('base de datos correctamente conectada')
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  const vehicule = require('./components/vehiculos/vehiculo.route');

  app.use('/api', vehicule);

module.export = app;

function _server(){
    console.log('Conexión establecida en el puerto ' +port);
};