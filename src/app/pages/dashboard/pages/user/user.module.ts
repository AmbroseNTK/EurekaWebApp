import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NbCardModule, NbListModule, NbTabsetModule } from '@nebular/theme';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NbTabsetModule,
    NbCardModule,
    NbListModule
  ]
})
export class UserModule { }
