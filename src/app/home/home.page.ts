import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Login } from '../contato/login/login';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, private rota: Router) {}

   login: Login = new Login;

  redefinir(){
  alert('verifique o seu e-mail');
  this.afAuth.auth.sendPasswordResetEmail(this.login.email).then(
    () => alert ('verifique o seu email')); {this.rota.navigate( [ ]); }
}

logar(){
this.afAuth.auth.signInWithEmailAndPassword(this.login.email, this.login.senha).then(
() => { this.rota.navigate(['autorizar']); }
).catch( (erro) => console.log(erro) );

}



}
