import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/model/Factura';
import { CrudFacturaService } from 'src/app/services/crud-factura.service';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-mostrar-factura',
  templateUrl: './mostrar-factura.component.html',
  styleUrls: ['./mostrar-factura.component.css']
})
export class MostrarFacturaComponent implements OnInit {
  dtOption: DataTables.Settings = {};
  facturas:Factura[];
  constructor(private service:CrudFacturaService, private router:Router, private loginService: LoginService) { }
  
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
   /* $(()=>{  
      $('#tf').DataTable(this.dtOption);
    });*/
    this.service.getFactura()
    .subscribe(data=>{
      this.facturas=data;
    })
  }

  editarFactura(factura:Factura){
    localStorage.setItem("idFactura", factura.idFactura.toString());
    this.router.navigate(["editarFactura"]);
  }

  verInfoFactura(factura:Factura){
    localStorage.setItem("idProducto", factura.idFactura.toString());
    this.router.navigate(["verInfoFactura"]);
  }

  eliminarFactura(factura:Factura){
    this.service.deleteFactura(factura)
    .subscribe(data=>{
      this.facturas=this.facturas.filter(p=>p!==factura);
    });
  }

  crear(){
    this.router.navigate(["agregarFactura"]);
  }

  salir() {
    this.loginService.logOut();
    this.router.navigate(['login']);
  }

  admin() {
    this.router.navigate(['register']);
  }
}
