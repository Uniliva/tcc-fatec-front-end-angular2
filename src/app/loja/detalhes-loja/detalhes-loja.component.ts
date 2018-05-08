import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { EstabelecimentoService } from './../../services/estabelecimento.service';
import { SensorService } from './../../services/sensor.service';
import { Estabelecimento } from './../../entidades/estabelecimento';
import { Sensor } from './../../entidades/sensor';


@Component({
  selector: 'app-detalhes-loja',
  templateUrl: './detalhes-loja.component.html',
  styleUrls: ['./detalhes-loja.component.css']
})
export class DetalhesLojaComponent implements OnInit, OnDestroy {
  inscricao: Subscription;
  inscricaoRota: Subscription;
  loja: Estabelecimento;
  sensorSelecionado: Sensor = new Sensor();
  loading = true;
  erro = false;
  modalActions = new EventEmitter<string | MaterializeAction>();
  msgLoja = this.msg('', false, '');
  msgSensor = this.msg('', false, '');

  constructor(private estabelecimentoService: EstabelecimentoService,
    private sensorService: SensorService, private route: ActivatedRoute) { }

  carregarSensor(sensor: Sensor) {
    this.msgSensor = this.msg('', false, '');
    this.sensorSelecionado = sensor;
  }

  buscaLoja(id: number) {
    this.loading = true;
    this.erro = false;
    this.inscricao = this.estabelecimentoService.getLojaporID(id).subscribe(
      res => {
        this.loja = res['estabelecimento'];
        console.log(this.loja);
        this.loading = false;
      },
      error => this.erro = true
    );
  }

  atualizaLoja(loja: Estabelecimento) {
    this.estabelecimentoService.atualizaLoja(loja).subscribe(
      res => this.msgLoja = this.msg('Loja atualizado com sucesso', true, 'verde'),
      error => this.msgLoja = this.msg('Não foi possivel atualizar a loja', true, 'vermelho')
    );
  }

  atualizaSensor(sensor: Sensor) {
    this.sensorService.atualizaSensor(sensor).subscribe(
      res => this.msgSensor = this.msg('Sensor atualizado com sucesso', true, 'verde'),
      error => this.msgSensor = this.msg('Não foi possivel atualizar o Sensor', true, 'vermelho')
    );
  }

  ngOnInit() {
    this.inscricaoRota = this.route.params.subscribe(params => this.buscaLoja(params['idloja']));
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
    this.inscricaoRota.unsubscribe();
  }

  limpaMsg() {
    this.msgLoja = this.msg('', false, '');
  }


  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

  msg(msg: string, ativo: boolean, cor: string) {
    return { msg: msg, ativo: ativo, cor: cor };
  }

}
