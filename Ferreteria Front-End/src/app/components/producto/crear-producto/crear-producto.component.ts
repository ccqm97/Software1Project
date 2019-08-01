import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudProductoService } from 'src/app/services/crud-producto.service';
import { Producto } from 'src/app/model/Producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  constructor(private router:Router, private sevice:CrudProductoService) { }

  producto: Producto = new Producto();

  ngOnInit() {
  }

  guardarProducto(){
    this.sevice.guardarProducto(this.producto)
    .subscribe(data=>{
      this.router.navigate(["mostrarProductos"]);
    });
  }

  cancelar(){
    this.router.navigate(["mostrarProductos"]);
  }
}
