import { Dados } from './../../entidades/dados';
import { Subscription } from 'rxjs/Subscription';
import { DadosService } from './../../services/dados.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-graficos-linha',
  templateUrl: './graficos-linha.component.html',
  styleUrls: ['./graficos-linha.component.css']
})

export class GraficosLinhaComponent implements OnInit {
  @Input() dados = [];

  labelGLine = [];
  dadosGLine = [];


  data: any;
  options: any;

  constructor(private dadosService: DadosService, private datePipe: DatePipe, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dados.forEach(d => {
      this.labelGLine.unshift(this.datePipe.transform(d.dataAtual, 'dd/MM - h:mm a'));
      this.dadosGLine.unshift(d.temperaturaAtual);
    });

    this.data = {
      labels: this.labelGLine,
      responsive: true,
      datasets: [
        {
          label: 'Dados do sensor',
          backgroundColor: '',
          borderColor: '#324C5D',
          data: this.dadosGLine,
        }
      ]
    };

    this.options = {
      legend: {
        position: 'bottom'
      },
      scales: {
        yAxes: [{
          ticks: {
            maxRotation: 90
          }
        }]
      }
    };

  }
}
