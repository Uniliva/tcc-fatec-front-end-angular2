import { Component, OnInit, Input } from '@angular/core';
import { Estabelecimento } from '../../entidades/estabelecimento';

@Component({
  selector: 'app-sensor-detalhes',
  templateUrl: './sensor-detalhes.component.html',
  styleUrls: ['./sensor-detalhes.component.css']
})
export class SensorDetalhesComponent implements OnInit {

  @Input() estabelecimento: Estabelecimento = new Estabelecimento();

  constructor() { }

  ngOnInit() {
  }

}
