
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StatusRoutingModule } from './status-routing.module';
import { DashStatusComponent } from './dash-status/dash-status.component';
import { ComumModule } from './../comum/comum.module';

@NgModule({
  imports: [
    CommonModule,
    StatusRoutingModule,
    ComumModule,
    FormsModule
  ],
  declarations: [DashStatusComponent]
})
export class StatusModule { }
