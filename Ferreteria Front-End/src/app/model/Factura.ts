import { Proveedor } from './Proveedor';

export class Factura {

    idFactura: number;
    idFacturaProveedor: string;
    fechaFactura: string;
    proveedor: Proveedor;
}