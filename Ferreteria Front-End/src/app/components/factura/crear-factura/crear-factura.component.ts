import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/model/Factura';
import { CrudFacturaService } from 'src/app/services/crud-factura.service';
import { CrudProveedorService } from 'src/app/services/crud-proveedor.service';
import { Proveedor } from 'src/app/model/Proveedor';
import { Producto } from 'src/app/model/Producto';
import { CrudProductoService } from 'src/app/services/crud-producto.service';
import { CrudItemsFacturaService } from 'src/app/services/crud-items-factura.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  proveedores: Proveedor[];
  productos: Producto[];
  factura: Factura = new Factura();

  item = {
    factura: this.factura,
    producto: null,
    cantidad: null,
    precio: null
  };

  items = [];

  constructor(private router: Router, private sevice: CrudFacturaService,
              private serviceProveedor: CrudProveedorService,
              private serviceProducto: CrudProductoService,
              private serviceItemFactura: CrudItemsFacturaService) { }

    ngOnInit() {
    this.serviceProveedor.getProveedores()
    .subscribe(data => {
      this.proveedores = data;
      console.log(this.proveedores);
    });
    this.serviceProducto.getProducto()
    .subscribe(data => {
      this.productos = data;
      console.log(this.productos);
    });
  }

  guardarFactura() {
    this.sevice.guardarFactura(this.factura)
    .subscribe(data => {
    });
    // tslint:disable-next-line: prefer-for-of
    for ( let x = 0; x < this.items.length; x++) {
      this.serviceItemFactura.guardarItem(this.items[x])
    .subscribe(data => {
    });
    }
    this.router.navigate(['mostrarFacturas']);
  }

  cancelar() {
    this.router.navigate(['mostrarFacturas']);
  }

  hayRegistros() {
    return this.items.length > 0;
  }

  borrar(item) {
    for ( let x = 0; x < this.items.length; x++) {
      if (this.item[x].producto.idProducto === item.producto.idProducto) {
        this.items.splice(x, 1 );
        return;
      }
    }
  }

  agregar() {
    // tslint:disable-next-line: prefer-for-of
    for ( let x = 0; x < this.items.length; x++) {
    if (this.items[x].producto.idProducto === this.item.producto.idProducto) {
      alert('ya existe un articulo con dicho codigo');
      return;
    }
    }
    this.items.push({producto: this.item.producto,
                     cantidad: this.item.cantidad,
                     precio: this.item.precio });
    this.item.producto = null;
    this.item.cantidad = null;
    this.item.precio = null;
  }

  seleccionar(item) {
    this.item.producto = item.producto;
    this.item.cantidad = item.cantidad;
    this.item.precio = item.precio;
  }

  modificar() {
    // tslint:disable-next-line: prefer-for-of
    for (let x = 0; x < this.items.length; x++) {
      if (this.items[x].producto.idProducto === this.item.producto.idProducto)      {
        this.items[x].cantidad = this.item.cantidad;
        this.items[x].precio = this.item.precio;
        return;
      }
      alert('No existe el código de articulo ingresado');
    }
  }

}
