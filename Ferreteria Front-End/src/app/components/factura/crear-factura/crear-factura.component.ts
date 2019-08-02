import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/model/Factura';
import { CrudFacturaService } from 'src/app/services/crud-factura.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {
  
  constructor(private router:Router, private sevice:CrudFacturaService) { }

  factura: Factura = new Factura();

  ngOnInit() {
  }

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
