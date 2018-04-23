import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { DashStatusComponent } from './dash-status/dash-status.component';

@NgModule({
  imports: [
    CommonModule,
    StatusRoutingModule
  ],
  declarations: [DashStatusComponent]
})
export class StatusModule { }
