import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudProveedorService } from '../../../services/crud-proveedor.service';
import { Proveedor } from '../../../model/Proveedor';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent implements OnInit {

  constructor(private router:Router, private sevice:CrudProveedorService) { }

  proveedor: Proveedor = new Proveedor();

  ngOnInit() {
  }

  guardarProveedor(){
    this.sevice.guardarProveedor(this.proveedor)
    .subscribe(data=>{
      this.router.navigate(["mostrarProveedores"]);
    });
  }

  cancelar(){
    this.router.navigate(["mostrarProveedores"]);
  }
}
