import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/model/Producto';
import { Router } from '@angular/router';
import { CrudProductoService } from 'src/app/services/crud-producto.service';
import { LoginService } from '../../../services/login.service';
import * as $ from 'jquery';
import 'DataTables.net';

@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.css']
})
export class MostrarProductosComponent implements OnInit {
  dtOption: any = {};
  productos:Producto[];
  constructor(private service:CrudProductoService, private router:Router, private loginService: LoginService) { }
  
  ngOnInit() {
    this.dtOption = {
      "language": {
				"emptyTable":			"No hay datos disponibles en la tabla.",
				"info":		   		"Del _START_ al _END_ de _TOTAL_ ",
				"infoEmpty":			"Mostrando 0 registros de un total de 0.",
				"infoFiltered":			"(filtrados de un total de _MAX_ registros)",
				"infoPostFix":			"(actualizados)",
				"lengthMenu":			"Mostrar _MENU_ registros",
				"loadingRecords":		"Cargando...",
				"processing":			"Procesando...",
				"search":			"Buscar Producto:",
				"searchPlaceholder":		"Dato para buscar",
				"zeroRecords":			"No se han encontrado coincidencias.",
				"paginate": {
					"first":			"Primera",
					"last":				"Última",
					"next":				"Siguiente",
					"previous":			"Anterior"
				},
				"aria": {
					"sortAscending":	"Ordenación ascendente",
					"sortDescending":	"Ordenación descendente"
				}
			},
        "paging":   true,
        "ordering": false,
        "info":     false
    };
    $(()=>{  
      $('#tablaProductos').DataTable(this.dtOption);
    });
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

  admin() {
    this.router.navigate(['register']);
  }

}
