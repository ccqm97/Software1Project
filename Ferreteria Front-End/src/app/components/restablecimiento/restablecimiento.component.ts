import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-restablecimiento',
  templateUrl: './restablecimiento.component.html',
  styleUrls: ['./restablecimiento.component.css']
})
export class RestablecimientoComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }


  public emailAddress = '';


  ngOnInit() {
  }

  restablecimiento() {
    this.loginService.restablecimiento(this.emailAddress);
    alert('Verifique su correo electronico');
    this.router.navigate(['login']);
  }

}

