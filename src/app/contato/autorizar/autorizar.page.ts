import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autorizar',
  templateUrl: './autorizar.page.html',
  styleUrls: ['./autorizar.page.scss'],
})
export class AutorizarPage implements OnInit {

  constructor() {}
  salvar (){
    alert('sucesso!!');
  }
  ngOnInit() { }

 
}
