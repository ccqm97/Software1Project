import { Component, OnInit } from '@angular/core';
import { CrudProveedorService } from 'src/app/services/crud-proveedor.service';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/model/Proveedor';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {

  proveedor:Proveedor = new Proveedor();
  constructor(private router:Router,private service:CrudProveedorService) { }

  ngOnInit() {
    this.editarProveedor();
  }

  editarProveedor(){
    let nitProveedor = localStorage.getItem("nitProveedor");
    this.service.getProveedorNit(+nitProveedor)
    .subscribe(data=>{
      this.proveedor= data; 
    })
  }

  actualizarProveedor(proveedor:Proveedor){
    this.service.updateProveedor(proveedor)
    .subscribe(data=>{
      this.proveedor = data;
      alert("Se actualizo el proveedor");
      this.router.navigate(["mostrarProveedores"]);
  });
  }
  
  cancelar(){
    this.router.navigate(["mostrarProveedores"]);
  }

}
