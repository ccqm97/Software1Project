import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';
  constructor(private loginService: LoginService, private asfAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  onLogIn() {
    this.loginService.loginEmailUSer(this.email, this.password)
    // tslint:disable-next-line: variable-name
    .then((_res) => {
      this.router.navigate(['home']);
    // tslint:disable-next-line: variable-name
    }).catch(_mensajeError => alert('Datos Erroneos'));
  }

  onLogOut() {
    this.loginService.logOut();
  }
}
