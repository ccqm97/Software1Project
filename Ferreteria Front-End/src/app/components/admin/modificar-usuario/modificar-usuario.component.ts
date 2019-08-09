import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

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

  modificarUser() {
    alert('Usuario modificado');
    this.router.navigate([['admin']]);
  }

}
