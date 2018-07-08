

const btnRegistrar = $('#registrar'); // == document.querySelector('#registrar')


btnRegistrar.on('click', () => {
  let modelo = $("#modelo").val(),
      marca = $("#marca").val(),
      annoFabricacion = $("#annofabricacion").val(),
      placa = $("#placa").val(),
      cilindraje = JSON.parse($("#gasolina").val());

  const nuevaMoto = new Motocicleta(marca, modelo, annoFabricacion, placa, cilindraje);

  guardarVehiculo(nuevaMoto);


  llenarTabla();

}); // == btnRegistrar.addEventListener('click', function(){...})


function llenarTabla() {
  let aVehiculos = new Array();

  let table = $('table tbody');

  table.html(''); // == table.innerHTML = '';

  for (let i = 0; i < aVehiculos.length; i++) {
    let fila = $('<tr/>'),
        columna = $('<td/>').append(aVehiculos[i].getModelo());

    fila.append(columna);

    columna = $('<td/>').append(aVehiculos[i].getMarca());
    fila.append(columna);

    columna = $('<td/>').append(aVehiculos[i].getAnnoFabricacion());
    fila.append(columna);

    columna = $('<td/>').append(aVehiculos[i].getMatricula());
    fila.append(columna);

    columna = $('<td/>').append(aVehiculos[i].getNombreCilindraje());
    fila.append(columna);

    table.append(fila);
  }
}