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
export class GraficosLinhaComponent implements OnInit , OnDestroy {
  inscricao: Subscription;
  inscricaoRota: Subscription;
  labelGLine = [];
  dadosGLine = [];
  data: any;
  options: any;

  constructor(private dadosService: DadosService, private datePipe: DatePipe, private route: ActivatedRoute) {}
  carrega(id: number) {
    this.inscricao = this.dadosService.getDadoSensor(id, 100).subscribe(
      dadosSensor => {
        dadosSensor['dados'].forEach(d => {
          this.labelGLine.push(this.datePipe.transform(d.dataAtual, 'dd/MM - h:mm'));
          console.log(d.temperaturaAtual.length);
          this.dadosGLine.unshift(d.temperaturaAtual);
        });

    this.data = {
      labels: this.labelGLine.reverse(),
      responsive: true,
      datasets: [
        {
          label: 'Dados do sensor',
          backgroundColor: '',
          borderColor: '#324C5D',
          data: this.dadosGLine.reverse()
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
);
  }

  ngOnInit() {
    this.inscricaoRota = this.route.params.subscribe( params => this.carrega(params['id']));
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
    this.inscricaoRota.unsubscribe();
  }

}
