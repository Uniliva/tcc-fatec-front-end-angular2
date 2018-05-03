import { Estabelecimento } from './../../entidades/estabelecimento';
import { EstabelecimentoService } from './../../services/estabelecimento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-loja',
  templateUrl: './dash-loja.component.html',
  styleUrls: ['./dash-loja.component.css']
})
export class DashLojaComponent implements OnInit {
  lojas: Estabelecimento;
  loading = true;
  erro = false;

  constructor(private estabelecimentoService: EstabelecimentoService) { }

  ngOnInit() {
    this.loading = true;
    this.erro = false;
    this.estabelecimentoService.getLojas().subscribe(
      res => {
        this.lojas = res['estabelecimentos'];
        console.log(this.lojas);
        this.loading = false;
      },
      error => this.erro = true


    );
  }

}
