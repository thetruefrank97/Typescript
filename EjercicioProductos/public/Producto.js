export default class Producto {
    constructor(Nombre, Precio) {
        this.Nombre = Nombre;
        this.Precio = Precio;
    }
    set setNombre(Nombre) {
        this.Nombre = Nombre;
    }
    get getNombre() {
        return this.Nombre;
    }
    set setPrecio(Precio) {
        this.Precio = Precio;
    }
    get getPrecio() {
        return this.Precio;
    }
    toString() {
        return `Nombre=${this.Nombre}, Precio=${this.Precio}`;
    }
    calcular(cantidad) {
        return this.Precio * cantidad;
    }
}
