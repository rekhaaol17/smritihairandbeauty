import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { HairCareComponent } from './home/components/hair-care/hair-care.component';
import { MakeupComponent } from './home/components/makeup/makeup.component';
import { SkinCareComponent } from './home/components/skin-care/skin-care.component';
import { WelcomeComponent } from './home/components/welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'skin-care',
    component: SkinCareComponent,
  },
  {
    path: 'makeup',
    component: MakeupComponent,
  },
  {
    path: 'hair-care',
    component: HairCareComponent,
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'book-appointment',
    component: BookAppointmentComponent,
  },
  {
    path: 'appointments',
    loadChildren: () =>
      import('./appointments/appointments.module').then(
        (m) => m.AppointmentsModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
