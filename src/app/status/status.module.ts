
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ChartModule} from 'primeng/chart';
import {FieldsetModule} from 'primeng/fieldset';

import { StatusRoutingModule } from './status-routing.module';
import { DashStatusComponent } from './dash-status/dash-status.component';
import { ComumModule } from './../comum/comum.module';
import { DashGraficosComponent } from './dash-graficos/dash-graficos.component';
import { GraficosPizzaComponent } from './graficos-pizza/graficos-pizza.component';
import { GraficosLinhaComponent } from './graficos-linha/graficos-linha.component';
import { SensorDetalhesComponent } from './sensor-detalhes/sensor-detalhes.component';

@NgModule({
  imports: [
    CommonModule,
    StatusRoutingModule,
    ComumModule,
    ChartModule,
    FormsModule,
    FieldsetModule
  ],
  declarations: [
    DashStatusComponent,
    DashGraficosComponent,
    GraficosPizzaComponent,
    GraficosLinhaComponent,
    SensorDetalhesComponent],
    providers: [DatePipe]
})
export class StatusModule { }
