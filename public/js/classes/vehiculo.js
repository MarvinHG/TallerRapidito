class Vehiculo {
  constructor(pMarca, pModelo, pAnnoFabricacion, pMatricula) {
    let marca = pMarca,
        modelo = pModelo,
        annoFabricacion = pAnnoFabricacion,
        matricula = pMatricula;

    // Getter
    this.getMarca = () => {
      return marca;
    }

    this.getModelo = () => {
      return modelo;
    }

    this.getAnnoFabricacion = () => {
      return annoFabricacion;
    }

    this.getMatricula = () => {
      return matricula;
    }

    // Setter
    this.setMarca = (pNuevaMarca) => {
      marca = pNuevaMarca;
    }

    this.setModelo = (pNuevoModelo) => {
      modelo = pNuevoModelo;
    }

    this.setAnnoFabricacion = (pNuevoAnno) => {
      annoFabricacion = pNuevoAnno;
    }

    this.setMatricula = (pNuevaMatricula) => {
      matricula = pNuevaMatricula;
    }
  }
}

// () => {} == function (){}