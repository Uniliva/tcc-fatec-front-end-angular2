import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LojaRoutingModule } from './loja-routing.module';
import { DashLojaComponent } from './dash-loja/dash-loja.component';

@NgModule({
  imports: [
    CommonModule,
    LojaRoutingModule
  ],
  declarations: [DashLojaComponent]
})
export class LojaModule { }
