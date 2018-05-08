import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Estabelecimento } from './../../entidades/estabelecimento';
import { EstabelecimentoService } from './../../services/estabelecimento.service';

@Component({
  selector: 'app-dash-loja',
  templateUrl: './dash-loja.component.html',
  styleUrls: ['./dash-loja.component.css']
})
export class DashLojaComponent implements OnInit, OnDestroy {
  inscricao: Subscription;
  lojas: Estabelecimento;
  loading = true;
  erro = false;

  constructor(private estabelecimentoService: EstabelecimentoService) { }

  ngOnInit() {
    this.loading = true;
    this.erro = false;
    this.inscricao = this.estabelecimentoService.getLojas().subscribe(
      res => {
        this.lojas = res['estabelecimentos'];
        this.loading = false;
      },
      error => this.erro = true


    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
