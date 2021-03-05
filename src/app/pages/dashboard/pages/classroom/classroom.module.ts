import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomRoutingModule } from './classroom-routing.module';
import { ClassroomComponent } from './classroom.component';
import { NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';


@NgModule({
  declarations: [ClassroomComponent],
  imports: [
    CommonModule,
    ClassroomRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule
  ]
})
export class ClassroomModule { }
