import { Proveedor } from './Proveedor';

export class Factura {
  [x: string]: any;

    idFactura: number;
    idFacturaProveedor: string;
    fechaFactura: string;
    proveedor: Proveedor;
  factura: any;
}