import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import{Location} from '@angular/common'

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
    }).catch(_mensajeError => alert('El usuario o la contraseña no coindicen con ninguna cuenta'));
  }

  onLogOut() {
    this.loginService.logOut();
  }

  restablecimiento() {
    this.router.navigate(['restablecimiento']);
  }


}
