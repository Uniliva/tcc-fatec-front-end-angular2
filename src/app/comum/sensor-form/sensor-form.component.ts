import { Component, OnInit, Input } from '@angular/core';
import { Sensor } from '../../entidades/sensor';

@Component({
  selector: 'app-sensor-form',
  templateUrl: './sensor-form.component.html',
  styleUrls: ['./sensor-form.component.css']
})
export class SensorFormComponent implements OnInit {
  @Input() sensor: Sensor = new Sensor();
  @Input() titulo: String = '';
  @Input() editar: boolean;

  constructor() { }

  ngOnInit() {
  }

}
