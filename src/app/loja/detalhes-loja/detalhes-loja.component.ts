
import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { EstabelecimentoService } from './../../services/estabelecimento.service';
import { Estabelecimento } from './../../entidades/estabelecimento';

@Component({
  selector: 'app-detalhes-loja',
  templateUrl: './detalhes-loja.component.html',
  styleUrls: ['./detalhes-loja.component.css']
})
export class DetalhesLojaComponent implements OnInit, OnDestroy {
  inscricao: Subscription;
  inscricaoRota: Subscription;
  loja: Estabelecimento;
  loading = true;
  erro = false;

  constructor(private estabelecimentoService: EstabelecimentoService,private route: ActivatedRoute) { }

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

  ngOnInit() {
    this.inscricaoRota = this.route.params.subscribe(params => this.buscaLoja(params['idloja']));    
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe
    this.inscricaoRota.unsubscribe

    
  }

  modalActions = new EventEmitter<string|MaterializeAction>();
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

}
