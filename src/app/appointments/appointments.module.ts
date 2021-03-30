import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';

@NgModule({
  declarations: [AppointmentListComponent, AppointmentDetailComponent],
  imports: [CommonModule, AppointmentsRoutingModule],
})
export class AppointmentsModule {}
