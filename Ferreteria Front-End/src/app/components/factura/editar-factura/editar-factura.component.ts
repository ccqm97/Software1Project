import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/model/Factura';
import { Router } from '@angular/router';
import { CrudFacturaService } from 'src/app/services/crud-factura.service';

@Component({
  selector: 'app-editar-factura',
  templateUrl: './editar-factura.component.html',
  styleUrls: ['./editar-factura.component.css']
})
export class EditarFacturaComponent implements OnInit {

  factura:Factura = new Factura();
  constructor(private router:Router,private service:CrudFacturaService) { }

  ngOnInit() {
    this.editarFactura();
  }

  editarFactura(){
    let idFactura = localStorage.getItem("idFactura");
    this.service.getFacturaId(+idFactura)
    .subscribe(data=>{
      this.factura= data; 
    })
  }

  actualizarFactura(factura:Factura){
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
