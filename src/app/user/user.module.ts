import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [UserListComponent, DashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
