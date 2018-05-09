import { AuthGuard } from './guards/auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ComumModule } from './comum/comum.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';


import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UsuarioService } from './services/usuario.service';
import { DadosService } from './services/dados.service';
import { AuthService } from './services/auth.service';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComumModule,
    LoginModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterializeModule

  ],
  providers: [
    UsuarioService,
    AuthService,
    AuthGuard,
    DadosService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
