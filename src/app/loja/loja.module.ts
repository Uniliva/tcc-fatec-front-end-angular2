import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { ComumModule } from './../comum/comum.module';
import { EstabelecimentoService } from './../services/estabelecimento.service';
import { SensorService } from './../services/sensor.service';
import { DetalhesLojaComponent } from './detalhes-loja/detalhes-loja.component';
import { CardModule } from 'primeng/card';
import { AlterarLojaComponent } from './alterar-loja/alterar-loja.component';
import { LojaRoutingModule } from './loja-routing.module';
import { DashLojaComponent } from './dash-loja/dash-loja.component';
import { AlterarSensorComponent } from './alterar-sensor/alterar-sensor.component';


@NgModule({
  imports: [
    CommonModule,
    ComumModule,
    FormsModule,
    LojaRoutingModule,
    FieldsetModule,
    CardModule,
    MaterializeModule
  ],
  declarations: [DashLojaComponent, DetalhesLojaComponent, AlterarLojaComponent, AlterarSensorComponent],
  providers: [EstabelecimentoService, SensorService]
})
export class LojaModule { }
