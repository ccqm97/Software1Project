import { Proveedor } from './Proveedor';
import { ItemFactura } from './ItemFactura';

export class Factura {

    idFactura: number;
    idFacturaProveedor: string;
    fechaFactura: string;
    proveedor: Proveedor;
    items: ItemFactura[];
}
