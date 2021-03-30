import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentListComponent,
  },
  {
    path: ':id/detail',
    component: AppointmentDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}
