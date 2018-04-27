import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-graficos',
  templateUrl: './dash-graficos.component.html',
  styleUrls: ['./dash-graficos.component.css']
})
export class DashGraficosComponent implements OnInit {

  data: any
  options: any;
  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            "#FF6384"
        ],
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          backgroundColor: [
            "#36A2EB"
        ]
        }
      ]
    }

    this.options = {
      title: {
        display: true,
        text: 'My Title',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };
  }
  ngOnInit() {
  }

}
