class Raices {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    //Metodos para obtener las raices cuando hay 2 soluciones posibles
    obtenerRaicez() {
        let x1 = (-this.b + Math.sqrt(this.getDiscriminante())) / (2 * this.a);
        let x2 = (-this.b + Math.sqrt(this.getDiscriminante())) / (2 * this.a);
        console.log("Solucion 1");
        console.log(x1);
        console.log("Solucion 2");
        console.log(x2);
    }
    //Obtiene una unica raiz, cuando solo tiene la posibilidad de er una solucion
    obtenerRaiz() {
        let x = (-this.b) / (2 * this.a);
        console.log("La unica solucion");
        console.log(x);
    }
    getDiscriminante() {
        return Math.pow(this.b, 2) - (4 * this.a * this.c);
    }
    tieneRaiz() {
        return this.getDiscriminante() === 0;
    }
    tieneRaices() {
        return this.getDiscriminante() > 0;
    }
    calcular() {
        if (this.tieneRaices()) {
            this.obtenerRaicez();
        }
        else if (this.tieneRaiz()) {
            this.obtenerRaiz();
        }
        else {
            console.log("No tiene soluciones");
        }
    }
}
let ecuacion = new Raices(1, 4, 4);
console.log(ecuacion.calcular());
