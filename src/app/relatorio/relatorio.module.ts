import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioRoutingModule } from './relatorio-routing.module';
import { DashRelatorioComponent } from './dash-relatorio/dash-relatorio.component';

@NgModule({
  imports: [
    CommonModule,
    RelatorioRoutingModule
  ],
  declarations: [DashRelatorioComponent]
})
export class RelatorioModule { }
