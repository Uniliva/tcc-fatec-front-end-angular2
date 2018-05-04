import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FieldsetModule} from 'primeng/fieldset';

import { LojaRoutingModule } from './loja-routing.module';
import { DashLojaComponent } from './dash-loja/dash-loja.component';
import { ComumModule } from './../comum/comum.module';
import { EstabelecimentoService } from './../services/estabelecimento.service';
import { DetalhesLojaComponent } from './detalhes-loja/detalhes-loja.component';



@NgModule({
  imports: [
    CommonModule,
    LojaRoutingModule,
    FieldsetModule,
    ComumModule
  ],
  declarations: [DashLojaComponent, DetalhesLojaComponent],
  providers: [EstabelecimentoService]
})
export class LojaModule { }
