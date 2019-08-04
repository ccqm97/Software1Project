import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/model/Factura';
import { Router } from '@angular/router';
import { CrudFacturaService } from 'src/app/services/crud-factura.service';
import { CrudProveedorService } from 'src/app/services/crud-proveedor.service';
import { Proveedor } from 'src/app/model/Proveedor';

@Component({
  selector: 'app-editar-factura',
  templateUrl: './editar-factura.component.html',
  styleUrls: ['./editar-factura.component.css']
})
export class EditarFacturaComponent implements OnInit {

  factura:Factura = new Factura();
  proveedores:Proveedor[];
  proveedor= new Proveedor();

  constructor(private router:Router,private service:CrudFacturaService,
    private serviceProveedor:CrudProveedorService) { }

  ngOnInit() {
    this.serviceProveedor.getProveedores()
    .subscribe(data=>{
      this.proveedores=data;
    });
    this.editarFactura();
  }

  editarFactura(){
    let idFactura = localStorage.getItem("idFactura");
    this.service.getFacturaId(+idFactura)
    .subscribe(data=>{
      this.factura = data; 
    });
      this.proveedor = this.factura.proveedor;
  }

  actualizarFactura(factura:Factura){
    console.log(this.factura.proveedor);
    let proveedor = localStorage.getItem("proveedor");
    this.service.updateFactura(factura)
    .subscribe(data=>{
      this.factura = data;
      alert("Se actualizo el Factura");
      this.router.navigate(["mostrarFacturas"]);
    });
  }
  
  cancelar(){
    this.router.navigate(["mostrarFacturas"]);
  }
}
