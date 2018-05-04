import { Estabelecimento } from './../../entidades/estabelecimento';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alterar-loja',
  templateUrl: './alterar-loja.component.html',
  styleUrls: ['./alterar-loja.component.css']
})
export class AlterarLojaComponent implements OnInit {

  @Input() loja : Estabelecimento
  codigo=10


  constructor() {
   }

  ngOnInit() {
  }

}
