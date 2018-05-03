import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sensor-detalhes',
  templateUrl: './sensor-detalhes.component.html',
  styleUrls: ['./sensor-detalhes.component.css']
})
export class SensorDetalhesComponent implements OnInit {

  @Input () estabelecimento = {};

  constructor() { }

  ngOnInit() {
  }

}
