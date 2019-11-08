import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Contato } from '../entidade/contato';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar-secao',
  templateUrl: './listar-secao.page.html',
  styleUrls: ['./listar-secao.page.scss'],
})
export class ListarSecaoPage implements OnInit {

listaContatos: Observable<Contato[]>;
  constructor(private banco: AngularFireDatabase) {
    this.listaContatos = this.banco.list<Contato>('contato').snapshotChanges().pipe(map(lista => lista.map(linha => ({
       key: linha.payload.key, ...linha.payload.val()
     }))));
   }
  ngOnInit() {
  }
  excluir(key){
      this.banco.list('contato').remove(key);
      alert("Excluido com sucesso!");
    }
}
