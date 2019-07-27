import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private asfAuth: AngularFireAuth) { }

  loginEmailUSer(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.asfAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData), err => reject(err));
    });
  }

  logOut() {
    return this.asfAuth.auth.signOut();
  }
}
