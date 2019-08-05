import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/Producto';
import { Router } from '@angular/router';
import { CrudProductoService } from 'src/app/services/crud-producto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  prod: FormGroup;
  submitted = false;
  producto:Producto = new Producto();
  constructor(private router:Router,private service:CrudProductoService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.prod = this.formBuilder.group({
      nombreProd: ['', Validators.required],            
      descProd: ['', Validators.required]
    });
    this.editarProducto();
  }

  get f() { return this.prod.controls; }

  editarProducto(){
    this.submitted = true;
         if (this.prod.invalid) {
            return;
        }
    let idProducto = localStorage.getItem("idProducto");
    this.service.getProductoId(+idProducto)
    .subscribe(data=>{
      this.producto= data; 
    })
  }

  actualizarProducto(producto:Producto){
    this.submitted = true;
    if (this.prod.invalid) {
       return;
   }
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.producto = data;
      alert("Se actualizo el Productor");
      this.router.navigate(["mostrarProductos"]);
  });
  }
  
  cancelar(){
    this.router.navigate(["mostrarProductos"]);
  }
}
