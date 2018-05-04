import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertaComponent } from './alerta/alerta.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  declarations: [
    AlertaComponent,
    PaginaNaoEncontradaComponent,
    LoadingComponent
  ],
  exports: [
    AlertaComponent,
    PaginaNaoEncontradaComponent,
    LoadingComponent
  ]
})
export class ComumModule { }
