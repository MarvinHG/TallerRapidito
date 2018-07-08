class Taxi extends Vehiculo {
    constructor(pMarca, pModelo, pAnnoFabricacion, pMatricula, pAros) {
        super(pMarca, pModelo, pAnnoFabricacion, pMatricula);
        let aros = pAros;

        // Getter
        this.getAros = () => {
            return aros;
        }

        // Setter
        this.setAros = (pNuevoAros) => {
            aros = pNuevoAros;
        }
    }
    getNombreAros() {
        let aros = this.getAros(),
            nombre = '';

        switch (aros) {
            case 1:
                nombre = '14';
                break;

            case 2:
                nombre = '13';
                break;

            default:
                nombre = '15';
                break;
        }

        return nombre;
    }

}