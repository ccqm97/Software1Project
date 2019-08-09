export class ItemProducto {
    codigoProducto: string;
    idProveedor: number;
    precioProducto:number;

    constructor(public codigoProducto1:string, public idProveedor1:number, public precioProducto1:number){
        this.codigoProducto = codigoProducto1;
        this.idProveedor = idProveedor1;
        this.precioProducto = precioProducto1;
    }
}