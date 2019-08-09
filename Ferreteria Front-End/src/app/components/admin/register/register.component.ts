import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  addUser() {
    this.loginService.registerUser(this.email, this.password).
    // tslint:disable-next-line: variable-name
    then((_res) => {
      alert('Usuario registrado');
      this.router.navigate(['login']);
    // tslint:disable-next-line: variable-name
    }).catch(_mensajeError => alert('No es posible agregar el nuevo usaurio'));
  }

  salir() {
    this.router.navigate(['home']);
  }

  admin() {
    this.router.navigate(['home']);
  }

}
