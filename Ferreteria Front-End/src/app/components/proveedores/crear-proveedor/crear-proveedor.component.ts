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
  [x: string]: any;

  constructor(private router:Router, private sevice:CrudProveedorService) { }

  ngOnInit() {
  }

  guardarProveedor(proveedor:Proveedor){
    this.CrudProveedorService.createProveedor(proveedor).subscribe(data=>{
      alert("Se agrego el nuevo proveedor correctamente")
      this.router.navigate(["listaDeProveedores"]);
    });
  }
}
