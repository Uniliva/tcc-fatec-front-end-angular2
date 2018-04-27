import { DashGraficosComponent } from './dash-graficos/dash-graficos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashStatusComponent } from './dash-status/dash-status.component';

const routes: Routes = [
  {path: '', component: DashStatusComponent},
  {path:'graficos/:id', component: DashGraficosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
