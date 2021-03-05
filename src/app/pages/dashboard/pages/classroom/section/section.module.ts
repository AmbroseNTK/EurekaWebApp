import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';
import { NbButtonModule, NbCardModule, NbDialogModule, NbFormFieldModule, NbInputModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule,
    SectionRoutingModule,
    NbInputModule,
    NbFormFieldModule,
    FormsModule,
    NbButtonModule,
    NbCardModule,
    NbDialogModule,

  ]
})
export class SectionModule { }
