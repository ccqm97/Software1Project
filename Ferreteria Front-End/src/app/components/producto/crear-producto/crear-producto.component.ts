import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudProductoService } from 'src/app/services/crud-producto.service';
import { Producto } from 'src/app/model/Producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  prod: FormGroup;
  submitted = false;
  constructor(private router:Router, private sevice:CrudProductoService,private formBuilder: FormBuilder) { }

  producto: Producto = new Producto();

  ngOnInit() {
    this.prod = this.formBuilder.group({
      nombreProd: ['', Validators.required],            
      descProd: ['', Validators.required]
  });
  }
  get f() { return this.prod.controls; }

  guardarProducto(){
    this.submitted = true;
         if (this.prod.invalid) {
            return;
        }
    this.sevice.guardarProducto(this.producto)
    .subscribe(data=>{
      alert("El producto se guardó exitosamente");
      this.router.navigate(["mostrarProductos"]);
    });
  }

  cancelar(){
    this.router.navigate(["mostrarProductos"]);
  }
}
