import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { StudioComponent } from './studio.component';
import { NbBadgeModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbTabsetModule, NbToastrModule, NbToggleModule } from '@nebular/theme';
import { CreateCourseComponent } from './dialogs/create-course/create-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [StudioComponent, CreateCourseComponent],
  imports: [
    CommonModule,
    StudioRoutingModule,
    NbIconModule,
    NbTabsetModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbDialogModule.forChild({ backdropClass: "backdrop-blur", hasBackdrop: true, closeOnBackdropClick: false }),
    NbToggleModule,
    NbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NbToastrModule,
    NbBadgeModule,
    QuillModule
  ]
})
export class StudioModule { }
