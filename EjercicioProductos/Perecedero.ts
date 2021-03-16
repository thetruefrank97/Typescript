import Producto from "./Producto";

export default class Perecedero extends Producto{
    private dias_a_caducar:number;


     constructor(dias_a_caducar:number,Nombre:string,Precio:number){
        super(Nombre,Precio);
        this.dias_a_caducar=dias_a_caducar
    }

    public set set_dias_a_caducar(dias_a_caducar:number){
        this.dias_a_caducar=dias_a_caducar;
    }

    public get get_dias_a_caducar():number{
        return this.dias_a_caducar;
    }

    public toString():string{
        return `${super.toString()} dias_a_caducar=${this.dias_a_caducar} `;
    }

    public calcular(cantidad:number):number{
        let precioFinal = super.calcular(cantidad);

        switch(this.dias_a_caducar){
            case 1:
                precioFinal = precioFinal/4;
                break;
            case 2:
                precioFinal = precioFinal/3;
                break;
            case 3:
                precioFinal = precioFinal/2;
        }

        return precioFinal;
    }
}