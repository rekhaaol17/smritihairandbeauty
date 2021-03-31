import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { WelcomeComponent } from './home/components/welcome/welcome.component';
import { SkinCareComponent } from './home/components/skin-care/skin-care.component';
import { MakeupComponent } from './home/components/makeup/makeup.component';
import { HairCareComponent } from './home/components/hair-care/hair-care.component';
import { ToastrModule } from 'ngx-toastr';
import { PinkToast } from './shared/components/pink-toast';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    BookAppointmentComponent,
    WelcomeComponent,
    SkinCareComponent,
    MakeupComponent,
    HairCareComponent,
    PinkToast,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PinkToast],
})
export class AppModule {}
