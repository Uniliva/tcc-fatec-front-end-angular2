import { Router } from '@angular/router';
import { SensorService } from './../../services/sensor.service';
import { EstabelecimentoService } from './../../services/estabelecimento.service';
import { Component, OnInit } from '@angular/core';

import { Sensor } from './../../entidades/sensor';
import { Estabelecimento } from './../../entidades/estabelecimento';


@Component({
  selector: 'app-dash-config',
  templateUrl: './dash-config.component.html',
  styleUrls: ['./dash-config.component.css']
})
export class DashConfigComponent implements OnInit {

  sensorNovo = new Sensor();
  lojaNova = new Estabelecimento();
  sensores = new Sensor();
  lojas: Estabelecimento[];
  sensoresSelecionado = new Sensor();
  lojaSelecionada = new Estabelecimento();
  lojaSelecionadaNovoSensorID = 0 ;
  itemsLoja = [];
  itemsSensor = [];
  loading = true;
  erro = false;

  constructor(private estabelecimentoService: EstabelecimentoService, private route: Router, private sensorService: SensorService) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.estabelecimentoService.getLojas().subscribe(
      res => {
        this.lojas = res['estabelecimentos'];
        this.lojas.forEach(l => this.carregaItemsLoja(l));
      },
      error => this.erro = true
    );

    this.sensorService.getSensores().subscribe(
      res => {
        this.sensores = res['sensores'];
        this.loading = false;
      },
      error => this.erro = true
    );
  }

  removeLoja(loja: Estabelecimento) {
    if (loja.sensores.length === 0) {
      if (this.validaDelete(`Deseja remover a loja   ${loja.nome}`)) {
        this.estabelecimentoService.removeLoja(loja.id).subscribe(
          res => {
            alert('Loja removida com sucesso');
            this.carregaDados();
          },
          error => alert('Erro ao remover loja' + error)
        );
      }
    } else {
      alert('Não é possivel remover essa loja, pois a mesma contem sensores ativos!');
    }
  }

  removeSensor(sensor: Sensor) {
    if (this.validaDelete(`Deseja remover o sensor: ${sensor.codigo} - ${sensor.decricao}`)) {
      this.sensorService.removeSensor(sensor.id).subscribe(
        res => {
          alert('Sensor removida com sucesso');
          this.carregaDados();
        },
        error => alert('Erro ao remover sensor' + error)
      );
    }
  }

  validaDelete(texto: string) {
    return confirm(texto);
  }

  addLoja(loja: Estabelecimento) {
    this.estabelecimentoService.addLoja(loja).subscribe(
      res => {
        alert('Loja adicionada com sucesso');
        this.carregaDados();
      },
      error => alert(error.error.msg)
    );
  }

  addSensor(sensor: Sensor) {
      sensor.idEstabelecimento = this.lojaSelecionadaNovoSensorID;
      this.sensorService.addSensor(sensor).subscribe(
        res => {
          alert('Sensor adicionado com sucesso');
          this.carregaDados();
          this.sensorNovo = new Sensor();
          this.lojaSelecionadaNovoSensorID = 0;
        },
        error => alert(error.error.msg)
      );
  }



  carregaItemsLoja(s: Estabelecimento) {
    this.itemsLoja.push({
      label: `${s.id} - ${s.nome}`,
      name: ` ${s.nome}`
    });

  }

}
