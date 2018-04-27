
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ChartModule} from 'primeng/chart';
import {FieldsetModule} from 'primeng/fieldset';
import {DropdownModule} from 'primeng/dropdown';

import { StatusRoutingModule } from './status-routing.module';
import { DashStatusComponent } from './dash-status/dash-status.component';
import { ComumModule } from './../comum/comum.module';
import { DashGraficosComponent } from './dash-graficos/dash-graficos.component';
import { GraficosBarrasComponent } from './graficos-barras/graficos-barras.component';
import { GraficosPizzaComponent } from './graficos-pizza/graficos-pizza.component';
import { GraficosLinhaComponent } from './graficos-linha/graficos-linha.component';

@NgModule({
  imports: [
    CommonModule,
    StatusRoutingModule,
    ComumModule,
    ChartModule,
    FormsModule,
    FieldsetModule,
    DropdownModule
  ],
  declarations: [
    DashStatusComponent, 
    DashGraficosComponent, 
    GraficosBarrasComponent, 
    GraficosPizzaComponent, 
    GraficosLinhaComponent]
})
export class StatusModule { }
