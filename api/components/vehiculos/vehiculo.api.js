const VehiculoModel = require('./vehiculo.model');

module.exports.register = (req, res)=>{
    let newVehicule = Object.assign(new VehiculoModel(), req.body);

    newVehicule.save((err)=>{
        if(err){
            res.json({success:false, msj:'Ha ocurrido un error en el registro de usuario' + err});
        }else{ 
            res.json({success:true, msj:'se ha registrado el vehiculo correctamente'});
        }
        
    })
}