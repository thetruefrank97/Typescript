class Raices{
    private a: number;
    private b: number;
    private c: number;

    constructor(a:number,b:number,c:number){
        this.a=a;
        this.b=b;
        this.c=c;
    }

    //Metodos para obtener las raices cuando hay 2 soluciones posibles
    private obtenerRaicez(){
        let x1:number=(-this.b+Math.sqrt(this.getDiscriminante()))/(2*this.a);
        let x2:number=(-this.b+Math.sqrt(this.getDiscriminante()))/(2*this.a);

        console.log("Solucion 1");
        console.log(x1);
        console.log("Solucion 2");
        console.log(x2);
    }

    //Obtiene una unica raiz, cuando solo tiene la posibilidad de er una solucion
    private obtenerRaiz(){
        let x=(-this.b)/(2*this.a);

        console.log("La unica solucion");
        console.log(x);
    }

    private getDiscriminante():number {
        return Math.pow(this.b,2)-(4*this.a*this.c);
    }

    private tieneRaiz():boolean{
        return this.getDiscriminante()===0;
    }

    private tieneRaices():boolean{
        return this.getDiscriminante()>0;
    }


    public calcular(){
        if(this.tieneRaices()){
            this.obtenerRaicez();
        }else if(this.tieneRaiz()){
            this.obtenerRaiz();
        }else{
            console.log("No tiene soluciones");
        }
    }
}

let ecuacion = new Raices(1,4,4);
console.log(ecuacion.calcular());