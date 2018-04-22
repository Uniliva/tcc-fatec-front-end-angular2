import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComumModule } from './comum/comum.module';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { UtilService } from './comum/util.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComumModule,
    FormsModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
