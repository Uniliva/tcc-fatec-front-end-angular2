import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComumModule } from './comum/comum.module';
import { Routes, RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AuthService } from './services/auth.service';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComumModule,
    LoginModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsuarioService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
