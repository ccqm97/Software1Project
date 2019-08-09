import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  constructor(private router: Router, private loginservice: LoginService) { }

  password = '';
  email = '';

  ngOnInit() {
  }

  salir() {
    this.loginservice.logOut();
    this.router.navigate(['login']);
  }

  admin() {
    this.router.navigate(['admin']);
  }

  eliminarUser() {
    this.loginservice.eliminarUsuario();
    alert('Usuario eliminado');
    this.router.navigate([['admin']]);
  }

}
