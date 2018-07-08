function guardarVehiculo(pnuevoVehiculo) {
    let response, 
        request = $.ajax({
            url : 'http://localhost:4000/api/save_vehicule', 
            type: 'post' , 
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            async: false,
            data: {
                'marca' : pnuevoVehiculo.getMarca(),
                'modelo' : pnuevoVehiculo.getModelo(),
                'annoFabricacion': pnuevoVehiculo.getAnnoFabricacion(),
                'matricula': pnuevoVehiculo.getMatricula(),
                'cilindraje': pnuevoVehiculo.getCilindraje(),
            }
        });
    request.done((response) =>{
        console.log('El vehiculo se registró con éxito');
    });
    request.fail(() =>{
        console.log('El vehiculo no se pudo registrar')
    });
}