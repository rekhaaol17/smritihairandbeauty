import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationSkinCareComponent } from './facial/components/combination-skin-care/combination-skin-care.component';
import { DrySkinCareComponent } from './facial/components/dry-skin-care/dry-skin-care.component';
import { OilySkinCareComponent } from './facial/components/oily-skin-care/oily-skin-care.component';
import { FacialComponent } from './facial/facial.component';
import { HairComponent } from './hair/hair.component';
import { MakeupComponent } from './makeup/makeup.component';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: '',
        redirectTo: 'hair',
      },
      {
        path: 'hair',
        component: HairComponent,
      },
      {
        path: 'makeup',
        component: MakeupComponent,
      },
      {
        path: 'facial',
        component: FacialComponent,
      },
    ],
  },
  {
    path: 'dry-skin-care',
    component: DrySkinCareComponent,
  },
  {
    path: 'combination-skin-care',
    component: CombinationSkinCareComponent,
  },
  {
    path: 'oily-skin-care',
    component: OilySkinCareComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
