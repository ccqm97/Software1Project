import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/model/Factura';
import { CrudFacturaService } from 'src/app/services/crud-factura.service';
import { CrudProveedorService } from 'src/app/services/crud-proveedor.service';
import { Proveedor } from 'src/app/model/Proveedor';
import { Producto } from 'src/app/model/Producto';
import { CrudProductoService } from 'src/app/services/crud-producto.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  proveedores:Proveedor[];
  source:Producto[];

  constructor(private router:Router, private sevice:CrudFacturaService,
    private serviceProveedor:CrudProveedorService, private serviceProducto:CrudProductoService) { }

  factura: Factura = new Factura();

  ngOnInit() {
    this.serviceProveedor.getProveedores()
    .subscribe(data=>{
      this.proveedores=data;
      console.log(this.proveedores);
    });
    this.serviceProducto.getProducto()
    .subscribe(data=>{
      this.source=data;
      console.log(this.source);
    });

;  }

  guardarFactura(){
    this.sevice.guardarFactura(this.factura)
    .subscribe(data=>{
      this.router.navigate(["mostrarFacturas"]);
    });
  }

  cancelar(){
    this.router.navigate(["mostrarFacturas"]);
  }

}
