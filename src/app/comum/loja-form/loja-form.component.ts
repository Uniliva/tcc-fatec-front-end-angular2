import { Estabelecimento } from './../../entidades/estabelecimento';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loja-form',
  templateUrl: './loja-form.component.html',
  styleUrls: ['./loja-form.component.css']
})
export class LojaFormComponent implements OnInit {
  @Input() loja: Estabelecimento = new Estabelecimento();
  @Input() titulo: String = '';
  codigo = 10;


  constructor() {
   }

  ngOnInit() {
  }
}
