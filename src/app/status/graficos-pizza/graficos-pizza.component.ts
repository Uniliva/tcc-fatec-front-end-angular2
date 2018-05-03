import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-graficos-pizza',
  templateUrl: './graficos-pizza.component.html',
  styleUrls: ['./graficos-pizza.component.css']
})
export class GraficosPizzaComponent implements OnInit {

  @Input() dadosEnergia = {}
  dados = [];
  data: any;
  options: any;

  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['Energia OK', 'Falha eletrica'],
      responsive: true,
      datasets: [
        {
          label: 'Dados do sensor',
          backgroundColor: ['#00884A', '#F56954'],
          data: [this.dadosEnergia['tem-energia'], this.dadosEnergia['falha-eletrica']],
          hoverBackgroundColor: ['#00884A', '#F56954']
        }
      ]
    };

    this.options = {
      legend: {
        position: 'bottom'
      }
    };
  }




}
