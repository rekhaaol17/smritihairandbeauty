import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HairComponent } from './hair/hair.component';
import { MakeupComponent } from './makeup/makeup.component';
import { FacialComponent } from './facial/facial.component';
import { DrySkinCareComponent } from './facial/components/dry-skin-care/dry-skin-care.component';
import { CombinationSkinCareComponent } from './facial/components/combination-skin-care/combination-skin-care.component';
import { OilySkinCareComponent } from './facial/components/oily-skin-care/oily-skin-care.component';
import { SensitiveSkinCareComponent } from './facial/components/sensitive-skin-care/sensitive-skin-care.component';
import { AppointmentModelComponent } from '../models/appointment-model/appointment-model.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ServicesComponent,
    HairComponent,
    MakeupComponent,
    FacialComponent,
    DrySkinCareComponent,
    CombinationSkinCareComponent,
    OilySkinCareComponent,
    SensitiveSkinCareComponent,
    AppointmentModelComponent,
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    TabsModule.forRoot(),
    BsDatepickerModule,
    TimepickerModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AppointmentModelComponent],
})
export class ServicesModule {}
