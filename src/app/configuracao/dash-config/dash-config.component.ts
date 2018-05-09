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
  lojas: Estabelecimento[];
  loading = true;
  erro = false;

  constructor(private estabelecimentoService: EstabelecimentoService) { }

  ngOnInit() {
    this.estabelecimentoService.getLojas().subscribe(
      res => {
        this.lojas = res['estabelecimentos'];
        this.loading = false;
      },
      error => this.erro = true
    );
  }

}
