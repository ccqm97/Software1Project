import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private asfAuth: AngularFireAuth) { }

  loginEmailUSer(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.asfAuth.auth.languageCode = 'es';
      this.asfAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData), err => reject(err));
    });
  }

  logOut() {
    return this.asfAuth.auth.signOut();
  }

  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.asfAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData), err => reject(err));
    });
  }

  isAuth() {
    return this.asfAuth.authState.pipe(map(auth => auth));
  }

  restablecimiento(emailAddress: string) {
    this.asfAuth.auth.languageCode = 'es';
    this.asfAuth.auth.sendPasswordResetEmail(emailAddress);
  }

  eliminarUsuario() {
   
  }

  modificarUsuario(newPassword: string) {

  }

}
