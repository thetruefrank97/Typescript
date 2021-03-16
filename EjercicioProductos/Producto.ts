export default class Producto{
    private Nombre:string;
    private Precio:number;


    constructor(Nombre:string,Precio:number){
        this.Nombre=Nombre;
        this.Precio=Precio;
    }

    public set setNombre(Nombre:string){
        this.Nombre=Nombre;
    }

    public get getNombre():string{
        return this.Nombre;
    }

    public set setPrecio(Precio:number){
        this.Precio=Precio;
    }

    public get getPrecio():number{
        return this.Precio;
    }


    public toString():string{
        return `Nombre=${this.Nombre}, Precio=${this.Precio}`;
    }

    public calcular(cantidad:number):number{
            return this.Precio*cantidad;
    }
}