import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/Producto';
import { Router } from '@angular/router';
import { CrudProductoService } from 'src/app/services/crud-producto.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.css']
})
export class MostrarProductosComponent implements OnInit {
  
  productos:Producto[];
  constructor(private service:CrudProductoService, private router:Router, private loginService: LoginService) { }
  
  ngOnInit() {
    this.service.getProducto()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  editarProducto(producto:Producto){
    localStorage.setItem("idProducto", producto.idProducto.toString());
    this.router.navigate(["editarProducto"]);
  }

  verInfoProducto(producto:Producto){
    localStorage.setItem("idProducto", producto.idProducto.toString());
    this.router.navigate(["verInfoProducto"]);
  }

  eliminarProducto(producto:Producto){
    this.service.deleteProducto(producto)
    .subscribe(data=>{
      this.productos=this.productos.filter(p=>p!==producto);
    });
  }

  crear(){
    this.router.navigate(["agregarProducto"]);
  }

  salir() {
    this.loginService.logOut();
    this.router.navigate(['login']);
  }

}
