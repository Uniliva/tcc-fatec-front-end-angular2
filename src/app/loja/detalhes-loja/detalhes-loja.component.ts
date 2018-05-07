import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { EstabelecimentoService } from './../../services/estabelecimento.service';
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
  msgAtualizaLoja = false;
  msgAtualizaSensor = false;

  constructor(private estabelecimentoService: EstabelecimentoService, private route: ActivatedRoute) { }

  carregarSensor(sensor: Sensor) {
    this.sensorSelecionado = sensor;
  }

  buscaLoja(id: number) {
    this.loading = true;
    this.erro = false;
    this.inscricao = this.estabelecimentoService.getLojaporID(id).subscribe(
      res => {
        this.loja = res['estabelecimento'];
        this.loading = false;
      },
      error => this.erro = true
    );
  }

  atualizaLoja(loja: Estabelecimento) {
 
    console.log('atualiza loja');
  }

  atualizaSensor(sensor: Sensor) {
    console.log('atualiza Sensor :' + sensor.codigo);
  }

  ngOnInit() {
    this.inscricaoRota = this.route.params.subscribe(params => this.buscaLoja(params['idloja']));
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
    this.inscricaoRota.unsubscribe();
  }


  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

}
