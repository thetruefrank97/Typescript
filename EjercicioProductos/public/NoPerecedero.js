import Producto from "./Producto.JS";
export default class NoPerecedero extends Producto {
    constructor(Nombre, Precio, tipo) {
        super(Nombre, Precio);
        this.tipo = tipo;
    }
    set setTipo(tipo) {
        this.tipo = tipo;
    }
    get getTipo() {
        return this.tipo;
    }
    toString() {
        return `${super.toString} tipo=${this.tipo}`;
    }
}
