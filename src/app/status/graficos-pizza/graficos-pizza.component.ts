import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from './../../services/dados.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-graficos-pizza',
  templateUrl: './graficos-pizza.component.html',
  styleUrls: ['./graficos-pizza.component.css']
})
export class GraficosPizzaComponent implements OnInit, OnDestroy {
  inscricao: Subscription;
  inscricaoRota: Subscription;
  dados = [];
  data: any;
  options: any;

  constructor(private dadosService: DadosService,  private route: ActivatedRoute) {}
  carrega(id: number) {
    this.inscricao = this.dadosService.getDadoSensor(id, 100).subscribe(
      dadosSensor => {
        dadosSensor['dados'].forEach(d => {
          console.log(d.temperaturaAtual.length);
          this.dados.push(d.temperaturaAtual);
        });

    this.data = {
      labels: ['Energia OK', 'Falha eletrica'],
      responsive: true,
      datasets: [
        {
          label: 'Dados do sensor',
         backgroundColor: [ ' #00884A', '#DC3912'],
          data: [20, 10]
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
