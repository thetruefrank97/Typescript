import Producto from "./Producto.js";
import Perecedero from "./Perecedero.js";
import NoPerecedero from "./NoPerecedero.js";
let productos = [];
let total=0;
productos[0] = new Producto("Iphone", 40000);
productos[1] = new Perecedero(1, "Leche", 25000);
productos[2] = new NoPerecedero("Maiz", 50000, "tipo X");
for (let x = 0; x < productos.length; x++) {
    total = total + productos[x].calcular(5);
}
console.log(total);
