class Motocicleta extends Vehiculo{
  constructor(pMarca, pModelo, pAnnoFabricacion, pMatricula, pCilindraje){
    super(pMarca, pModelo, pAnnoFabricacion, pMatricula);
    let cilindraje = pCilindraje;

    // Getter
    this.getCilindraje = () => {
      return cilindraje;
    }

    // Setter
    this.setCilindraje = (pNuevoCilindraje) => {
      cilindraje = pNuevoCilindraje;
    }
  }

  getNombreCilindraje() {
    let cilindraje = this.getCilindraje(),
        nombre = '';

    switch (cilindraje) {
      case 1:
        nombre = '180CC';
      break;

      case 2:
        nombre = '200CC';
      break;
    
      default:
        nombre = '280CC';
      break;
    }

    return nombre;
  }
}