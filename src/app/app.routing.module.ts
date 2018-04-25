import { ComumModule } from './comum/comum.module';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PaginaNaoEncontradaComponent } from './comum/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoginComponent } from './login/login/login.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'status', loadChildren: 'app/status/status.module#StatusModule' },
    { path: 'lojas', loadChildren: 'app/loja/loja.module#LojaModule' },
    { path: 'relatorio', loadChildren: 'app/relatorio/relatorio.module#RelatorioModule' },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes/*, {useHash: true}*/)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
