import Producto from "./Producto";

export default class NoPerecedero extends Producto{
    private tipo:string;

    constructor(Nombre:string,Precio:number,tipo:string){
        super(Nombre,Precio);
        this.tipo=tipo;
    }

    public set setTipo(tipo:string){
        this.tipo=tipo;
    }

    public get getTipo():string{
        return this.tipo;
    }

    public toString():string{
        return `${super.toString} tipo=${this.tipo}`;
    }

}