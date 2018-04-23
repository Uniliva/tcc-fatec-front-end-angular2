import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashRelatorioComponent } from './dash-relatorio/dash-relatorio.component';



const routes: Routes = [
  { path: '',  component: DashRelatorioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioRoutingModule { }
