import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/model/Factura';
import { CrudFacturaService } from 'src/app/services/crud-factura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-factura',
  templateUrl: './mostrar-factura.component.html',
  styleUrls: ['./mostrar-factura.component.css']
})
export class MostrarFacturaComponent implements OnInit {

  facturas:Factura[];
  constructor(private service:CrudFacturaService, private router:Router) { }
  
  ngOnInit() {
    this.service.getFactura()
    .subscribe(data=>{
      this.facturas=data;
    })
  }

  editarFactura(factura:Factura){
    localStorage.setItem("idFactura", factura.idFactura.toString());
    this.router.navigate(["editarFactura"]);
  }

  verInfoFactura(factura:Factura){
    localStorage.setItem("idProducto", factura.idFactura.toString());
    this.router.navigate(["verInfoFactura"]);
  }

  eliminarFactura(factura:Factura){
    this.service.deleteFactura(factura)
    .subscribe(data=>{
      this.facturas=this.facturas.filter(p=>p!==factura);
    });
  }

  crear(){
    this.router.navigate(["agregarFactura"]);
  }
}
