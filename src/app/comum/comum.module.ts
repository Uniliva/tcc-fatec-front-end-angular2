import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AlertaComponent } from './alerta/alerta.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoadingComponent } from './loading/loading.component';
import { LojaFormComponent } from './loja-form/loja-form.component';
import { SensorFormComponent } from './sensor-form/sensor-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    FormsModule
  ],
  declarations: [
    AlertaComponent,
    PaginaNaoEncontradaComponent,
    LoadingComponent,
    LojaFormComponent,
    SensorFormComponent
  ],
  exports: [
    AlertaComponent,
    PaginaNaoEncontradaComponent,
    LoadingComponent,
    LojaFormComponent,
    SensorFormComponent
  ]
})
export class ComumModule { }
