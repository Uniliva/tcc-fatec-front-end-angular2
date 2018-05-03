import { Status } from './../../entidades/sensor';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DadosService } from './../../services/dados.service';
import { Sensor } from '../../entidades/sensor';

@Component({
  selector: 'app-dash-status',
  templateUrl: './dash-status.component.html',
  styleUrls: ['./dash-status.component.css']
})
export class DashStatusComponent implements OnInit, OnDestroy {

  listaSensores = [];
  atualiza;

  loading = true;
  erro = false

  constructor(private _dadosService: DadosService) { }

  ngOnInit() {
    this.monitora();
  }
  ngOnDestroy(): void {    
    console.log('Parando');
    clearTimeout(this.atualiza);
  }

  monitora() {
    this.loading = true;
    this.erro = false
    this.listaSensores = [];
    this._dadosService.getSensores().subscribe(
      res => {
        this.buscaDados(res['sensores'])
        this.loading = false;
      },
      error => this.erro = true
    );
    console.log('Atualizando');
    this.atualiza = setTimeout(() => this.monitora(), 20000); // 2 minnutos -> 120000 //5- minutos -> 300000
  }

  buscaDados(sensores: Sensor[]) {
    sensores.forEach(s => {
      this._dadosService.getDadoSensor(s.id, 1).subscribe(res => {
        s.dados = res['dados'][0];
        if (s.dados) {
          s.status = this.getStatus(s);
          this.carregaLista(s);
        }
      },
        error => console.log(`Aconteceu um erro: ${error}`)
      );
    });
  }

  getStatus(sensor: Sensor): Status {
    const status = new Status();
    if (!sensor.dados.temEnergia) {
      status.popula('vermelho', 'Equipamento sem alimentação eletrica!');
    } else if (sensor.dados.temperaturaAtual >= sensor.temperaturaMax) {
      status.popula('vermelho', 'Temperatura acima do limite Máximo!');
    } else if (sensor.dados.temperaturaAtual < sensor.temperaturaMax && sensor.dados.temperaturaAtual >= (sensor.temperaturaMax - 2)) {
      status.popula('amarelo', 'Temperatura Proximo ao limite Máximo!');

    } else if (sensor.dados.temperaturaAtual <= sensor.temperaturaMin) {
      status.popula('vermelho', 'Temperatura Abaixo do limite Mínimo!');

    } else if (sensor.dados.temperaturaAtual > sensor.temperaturaMin && sensor.dados.temperaturaAtual <= (sensor.temperaturaMin + 2)) {
      status.popula('amarelo', 'Temperatura Proximo ao limite Mínimo!');

    } else {
      status.popula('verde', 'Temperatura normal!');
    }
    return status;
  }

  carregaLista(sensor: Sensor) {
    if (sensor.status.cor === 'vermelho' || sensor.status.cor === 'amarelo') {
      this.listaSensores.unshift(sensor);
    } else {
      this.listaSensores.push(sensor);
    }
  }

}
