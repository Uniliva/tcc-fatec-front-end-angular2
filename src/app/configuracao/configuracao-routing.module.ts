import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashConfigComponent } from './dash-config/dash-config.component';


const routes: Routes = [
  {path: '', component: DashConfigComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracaoRoutingModule { }


