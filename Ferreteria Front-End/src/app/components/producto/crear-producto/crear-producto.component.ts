import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudProductoService } from 'src/app/services/crud-producto.service';
import { Producto } from 'src/app/model/Producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/model/Proveedor';
import { CrudProveedorService } from 'src/app/services/crud-proveedor.service';
import { ItemProducto } from 'src/app/model/ItemProducto';
import * as $ from 'jquery';
import { CrudItemProductoService } from 'src/app/services/crud-item-producto.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {

  prod: FormGroup;
  proveedores:Proveedor[];
  itemsProductos :Array<ItemProducto> =[];
  submitted = false;

  constructor(private router:Router, 
    private sevice:CrudProductoService,
    private serviceProveedor:CrudProveedorService,
    private itemProdService:CrudItemProductoService,
    private formBuilder: FormBuilder) { }

  producto: Producto = new Producto();

  ngOnInit() {
    this.serviceProveedor.getProveedores()
    .subscribe(data=>{
      this.proveedores=data;
      this.proveedores.forEach(element => {
        $('#ProveedorProducto').append('<option value="'+element.nitProveedor+'">'+element.nombreProveedor+'</option>');
      });
      console.log(this.proveedores);
    });
    /**/
    this.prod = this.formBuilder.group({
      codigoProd: ['', Validators.required],
      proveedorItemProd: ['', Validators.required],
      nombreProd: ['', Validators.required],            
      descProd: ['', Validators.required],            
      precio: ['', Validators.required]
    });
    $("#codigoProd").keyup(function(){
      $("#codItemProducto").val($("#codigoProd").val());
    });
    
  }
  get f() { return this.prod.controls; }
  
  agregarItem(){
    if ($("#codigoProd").val()!==""||$("#precioProducto").val()!=="") {
      let myItem = new  ItemProducto($("#codigoProd").val().toString(),parseInt($("#ProveedorProducto option:selected").val().toString()),parseInt($("#precioProducto").val().toString()));
      this.itemsProductos.push(myItem);
      $('#table > tbody').append($("<tr>").append($("<td>").text($("#ProveedorProducto option:selected").text())).append($("<td>").text($("#precioProducto").val().toString())).append($("<td>").append($('<span>').addClass("btn btn-danger tableActua-remove"))));
    }else{
      alert("Por favor ingrese los datos");
    }
    
  }

  guardarProducto(){
    this.submitted = true;
         if (this.prod.invalid) {
            return;
        }
    this.sevice.guardarProducto(this.producto)
    .subscribe(data=>{
      this.itemsProductos.forEach(element => {
        this.itemProdService.guardarItemProducto(element)
      .subscribe(data=>{
      });
      });
      alert("El producto se guardó exitosamente");
        this.router.navigate(["mostrarProductos"]);
    });
    
  }

  cancelar(){
    this.router.navigate(["mostrarProductos"]);
  }
}
