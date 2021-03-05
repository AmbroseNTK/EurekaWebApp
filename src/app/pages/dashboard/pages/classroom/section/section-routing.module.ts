import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbCardModule } from '@nebular/theme';

import { SectionComponent } from './section.component';

const routes: Routes = [{ path: '', component: SectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), NbCardModule],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
