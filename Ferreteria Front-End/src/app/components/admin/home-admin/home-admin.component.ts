import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  salir() {
    this.loginService.logOut();
    this.router.navigate(['login']);
  }

  registrar() {
    this.router.navigate(['register']);
  }

  modificar() {
    this.router.navigate(['editarUsuario']);
  }

  eliminar() {
    this.router.navigate(['eliminarUsuario']);
  }
}
