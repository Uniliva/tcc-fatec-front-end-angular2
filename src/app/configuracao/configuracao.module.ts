import { SensorService } from './../services/sensor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComumModule } from './../comum/comum.module';
import { FormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';

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
    TableModule,
    TabViewModule,
    DropdownModule
  ],
  declarations: [DashConfigComponent],
  providers: [
    EstabelecimentoService,
    SensorService
  ]
})
export class ConfiguracaoModule { }
