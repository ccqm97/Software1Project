import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/model/Proveedor';
import { CrudProveedorService } from 'src/app/services/crud-proveedor.service';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-mostar-proveedor',
  templateUrl: './mostar-proveedor.component.html',
  styleUrls: ['./mostar-proveedor.component.css']
})
export class MostarProveedorComponent implements OnInit {
  
  dtOption: DataTables.Settings = {};
  proveedores: Proveedor[];
  constructor(private service: CrudProveedorService, private router: Router, private loginservice: LoginService) { }

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
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
    $(()=>{  
      
    });
    this.service.getProveedores()
    .subscribe(data => {
      this.proveedores = data;
    });
  }

  editarProveedor(proveedor: Proveedor) {
    localStorage.setItem('nitProveedor', proveedor.nitProveedor.toString());
    this.router.navigate(['editarProveedor']);
  }

  verInfoProveedor(proveedor: Proveedor) {
    localStorage.setItem('nitProveedor', proveedor.nitProveedor.toString());
    this.router.navigate(['verInfoProveedor']);
  }

  eliminarProveedor(proveedor: Proveedor) {
    this.service.deleteProveedor(proveedor)
    .subscribe(data => {
      this.proveedores = this.proveedores.filter(p => p !== proveedor);
    });
  }

  crear() {
    this.router.navigate(['agregarProveedor']);
  }

  salir() {
    this.loginservice.logOut();
    this.router.navigate(['login']);
  }

  admin() {
    this.router.navigate(['admin']);
  }
}
