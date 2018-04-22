import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { AlertaComponent } from './alerta/alerta.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuComponent,
    AlertaComponent
  ],
  exports: [
    MenuComponent,
    AlertaComponent
  ]
})
export class ComumModule { }
