import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesLojaComponent } from './detalhes-loja/detalhes-loja.component';
import { DashLojaComponent } from './dash-loja/dash-loja.component';

const routes: Routes = [
  {path: '', component: DashLojaComponent},
  {path: 'detalhes', component: DetalhesLojaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LojaRoutingModule { }
