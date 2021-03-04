import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { StudioComponent } from './studio.component';
import { NbAccordionModule, NbBadgeModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbListModule, NbRouteTabsetModule, NbTabsetModule, NbToastrModule, NbToggleModule } from '@nebular/theme';
import { CreateCourseComponent } from './dialogs/create-course/create-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { EditorComponent } from './components/editor/editor.component';
import { SectionComponent } from './components/section/section.component';
import { SectionFormComponent } from './dialogs/section-form/section-form.component';
import { QuestionBankComponent } from './components/question-bank/question-bank.component';
import { MultipleChoiceComponent } from './dialogs/multiple-choice/multiple-choice.component';


@NgModule({
  declarations: [StudioComponent, CreateCourseComponent, EditorComponent, SectionComponent, SectionFormComponent, QuestionBankComponent, MultipleChoiceComponent],
  imports: [
    CommonModule,
    StudioRoutingModule,
    NbIconModule,
    NbTabsetModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbFormFieldModule,
    NbDialogModule.forChild({ backdropClass: "backdrop-blur", hasBackdrop: true, closeOnBackdropClick: false }),
    NbToggleModule,
    NbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NbToastrModule,
    NbBadgeModule,
    NbRouteTabsetModule,
    NbAccordionModule,
    NbListModule,
    QuillModule
  ]
})
export class StudioModule { }
