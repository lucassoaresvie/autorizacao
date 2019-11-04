import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/contato';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.page.html',
  styleUrls: ['./sessao.page.scss'],
})
export class SessaoPage implements OnInit {

contato: Contato = new Contato();

  constructor(private banco: AngularFireDatabase, private rota: Router) { }

  salvar() {
      this.banco.list('contato').push(this.contato);

      this.contato = new Contato();
      alert('Bem Vindo(a) !!!');
    }

  ngOnInit() {}

  }
