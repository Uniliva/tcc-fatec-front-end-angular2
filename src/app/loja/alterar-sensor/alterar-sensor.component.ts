import { Sensor } from './../../entidades/sensor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alterar-sensor',
  templateUrl: './alterar-sensor.component.html',
  styleUrls: ['./alterar-sensor.component.css']
})
export class AlterarSensorComponent implements OnInit {
  @Input() sensor: Sensor = new Sensor();

  constructor() { }

  ngOnInit() {
  }

}
