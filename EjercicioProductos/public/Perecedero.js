import Producto from "./Producto.js";
export default class Perecedero extends Producto {
    constructor(dias_a_caducar, Nombre, Precio) {
        super(Nombre, Precio);
        this.dias_a_caducar = dias_a_caducar;
    }
    set set_dias_a_caducar(dias_a_caducar) {
        this.dias_a_caducar = dias_a_caducar;
    }
    get get_dias_a_caducar() {
        return this.dias_a_caducar;
    }
    toString() {
        return `${super.toString()} dias_a_caducar=${this.dias_a_caducar} `;
    }
    calcular(cantidad) {
        let precioFinal = super.calcular(cantidad);
        switch (this.dias_a_caducar) {
            case 1:
                precioFinal = precioFinal / 4;
                break;
            case 2:
                precioFinal = precioFinal / 3;
                break;
            case 3:
                precioFinal = precioFinal / 2;
        }
        return precioFinal;
    }
}
