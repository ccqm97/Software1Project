import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/model/Proveedor';
import { CrudProveedorService } from 'src/app/services/crud-proveedor.service';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-mostar-proveedor',
  templateUrl: './mostar-proveedor.component.html',
  styleUrls: ['./mostar-proveedor.component.css']
})
export class MostarProveedorComponent implements OnInit {

  proveedores: Proveedor[];
  constructor(private service: CrudProveedorService, private router: Router, private loginservice: LoginService) { }

  ngOnInit() {
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
}
