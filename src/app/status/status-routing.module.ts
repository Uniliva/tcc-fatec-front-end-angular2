import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashStatusComponent } from './dash-status/dash-status.component';

const routes: Routes = [
  {path: '', component: DashStatusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
