import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomRoutingModule } from './classroom-routing.module';
import { ClassroomComponent } from './classroom.component';
import { NbButtonModule, NbCardModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbProgressBarModule, NbRadioModule, NbSidebarModule, NbToastrModule } from '@nebular/theme';
import { TakeExamComponent } from './take-exam/take-exam.component';
import { DoExamComponent } from './do-exam/do-exam.component';


@NgModule({
  declarations: [ClassroomComponent, TakeExamComponent, DoExamComponent],
  imports: [
    CommonModule,
    ClassroomRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbFormFieldModule,
    NbButtonModule,
    NbMenuModule,
    NbCardModule,
    NbDialogModule,
    NbToastrModule,
    NbProgressBarModule,
    NbListModule,
    NbRadioModule,
    NbIconModule
  ]
})
export class ClassroomModule { }
