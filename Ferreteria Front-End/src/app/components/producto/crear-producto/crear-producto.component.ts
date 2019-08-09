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
  itemProducto: ItemProducto = new ItemProducto();
  myItemProducto: ItemProducto = new ItemProducto();

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
    this.myItemProducto.codigoProducto = $("#codigoProd").text();
    this.myItemProducto.idProveedor = parseInt($("#ProveedorProducto option:selected").val().toString());
    this.myItemProducto.precioProducto = parseInt($("#precioProducto").text());
    if ($("#codItemProducto").val()!==""||$("#precioProducto").val()!=="") {
      alert("se agregó: "+this.myItemProducto.idProveedor);
      this.itemsProductos.push(this.myItemProducto);
      alert("sdsdsdsd"+this.itemsProductos.length);
    }else{
      alert("errr");
    }
    
  }

  guardarProducto(){
    this.itemsProductos.forEach(element => {
      alert("***ITEM"+element.idProveedor+"--"+element.precioProducto);
      this.itemProdService.guardarItemProducto(element)
    .subscribe(data=>{
    });
    });
    /*this.submitted = true;
         if (this.prod.invalid) {
            return;
        }
    this.sevice.guardarProducto(this.producto)
    .subscribe(data=>{
      this.itemsProductos.forEach(element => {
        alert("***ITEM"+element.idProveedor);
        this.itemProdService.guardarItemProducto(element)
      .subscribe(data=>{
      });
      });
      alert("El producto se guardó exitosamente");
        this.router.navigate(["mostrarProductos"]);
    });*/
    
  }

  cancelar(){
    this.router.navigate(["mostrarProductos"]);
  }
}
