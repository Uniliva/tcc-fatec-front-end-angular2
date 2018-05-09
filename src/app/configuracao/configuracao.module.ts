import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComumModule } from './../comum/comum.module';
import { FormsModule } from '@angular/forms';

import { ConfiguracaoRoutingModule } from './configuracao-routing.module';
import { DashConfigComponent } from './dash-config/dash-config.component';
import { FieldsetModule } from 'primeng/fieldset';
import { MaterializeModule } from 'angular2-materialize';
import {TableModule} from 'primeng/table';
import { EstabelecimentoService } from '../services/estabelecimento.service';

@NgModule({
  imports: [
    CommonModule,
    ConfiguracaoRoutingModule,
    FieldsetModule,
    FormsModule,
    MaterializeModule,
    ComumModule,
    TableModule
  ],
  declarations: [DashConfigComponent],
  providers: [
    EstabelecimentoService
  ]
})
export class ConfiguracaoModule { }
