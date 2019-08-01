import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/Producto';
import { Router } from '@angular/router';
import { CrudProductoService } from 'src/app/services/crud-producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  producto:Producto = new Producto();
  constructor(private router:Router,private service:CrudProductoService) { }

  ngOnInit() {
    this.editarProducto();
  }

  editarProducto(){
    let idProducto = localStorage.getItem("idProducto");
    this.service.getProductoId(+idProducto)
    .subscribe(data=>{
      this.producto= data; 
    })
  }

  actualizarProducto(producto:Producto){
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.producto = data;
      alert("Se actualizo el proveedor");
      this.router.navigate(["mostrarProductos"]);
  });
  }
  
  cancelar(){
    this.router.navigate(["mostrarProductos"]);
  }
}
