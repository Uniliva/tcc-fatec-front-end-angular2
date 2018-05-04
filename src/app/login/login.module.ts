import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComumModule } from './../comum/comum.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ComumModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
