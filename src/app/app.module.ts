import { ComumModule } from './comum/comum.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
