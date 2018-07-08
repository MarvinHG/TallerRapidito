const mongoose = require('mongoose');

let VehiculeSchema = new mongoose.Schema({
    marca : {type : String, require: true},
    modelo : {type : String, require: true},
    matricula : {type : String, require: true},
    annoFabricacion : {type : Number, require: true},
    cilindraje : {type : Boolean, require: true}
});

module.exports = mongoose.model('Vehicule', VehiculeSchema);