import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from './../../services/dados.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dash-graficos',
  templateUrl: './dash-graficos.component.html',
  styleUrls: ['./dash-graficos.component.css']
})
export class DashGraficosComponent implements OnInit, OnDestroy {
  inscricao: Subscription;
  inscricaoRota: Subscription;
  loading = true;
  erro = false;
  energia = {};
  estabelecimento = {};
  dados = {};

  constructor(private dadosService: DadosService, private route: ActivatedRoute) { }

  carrega(id: number) {
    this.inscricao = this.dadosService.getDadoaSensorPorId(id, 100).subscribe(
      dadosSensor => {
        this.dados = dadosSensor['dados'];
        this.energia = dadosSensor['energia'];
        this.estabelecimento = dadosSensor['estabelecimento'];
        this.loading = false;
      },
      erro => this.erro = true);
  }

  ngOnInit() {
    this.inscricaoRota = this.route.params.subscribe(params => this.carrega(params['id']));
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
    this.inscricaoRota.unsubscribe();
  }

}
