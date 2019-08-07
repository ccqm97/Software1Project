import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudProductoService } from 'src/app/services/crud-producto.service';
import { Producto } from 'src/app/model/Producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/model/Proveedor';
import { CrudProveedorService } from 'src/app/services/crud-proveedor.service';
import { itemProducto } from 'src/app/model/itemProducto';
import jsProducto from 'src/assets/js/jsProducto';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  prod: FormGroup;
  proveedores:Proveedor[];
  submitted = false;
  constructor(private router:Router, private sevice:CrudProductoService,
    private serviceProveedor:CrudProveedorService,private formBuilder: FormBuilder) { }

  producto: Producto = new Producto();
  itemProducto: itemProducto = new itemProducto();

  ngOnInit() {
    this.serviceProveedor.getProveedores()
    .subscribe(data=>{
      this.proveedores=data;
      console.log(this.proveedores);
    });
    this.prod = this.formBuilder.group({
      nombreProd: ['', Validators.required],            
      descProd: ['', Validators.required],            
      precio: ['', Validators.required]
    });
    jsProducto.hola();
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
