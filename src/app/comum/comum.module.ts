import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertaComponent } from './alerta/alerta.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertaComponent,
    PaginaNaoEncontradaComponent
  ],
  exports: [
    AlertaComponent,
    PaginaNaoEncontradaComponent
  ]
})
export class ComumModule { }
