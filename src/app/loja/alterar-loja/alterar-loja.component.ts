import { Component, OnInit, Input } from '@angular/core';

import { Estabelecimento } from './../../entidades/estabelecimento';

@Component({
  selector: 'app-alterar-loja',
  templateUrl: './alterar-loja.component.html',
  styleUrls: ['./alterar-loja.component.css']
})
export class AlterarLojaComponent implements OnInit {

  @Input() loja: Estabelecimento = new Estabelecimento();
  codigo = 10;


  constructor() {
   }

  ngOnInit() {
  }

}
