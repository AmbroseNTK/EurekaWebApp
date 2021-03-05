import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassroomComponent } from './classroom.component';

const routes: Routes = [{
  path: '', component: ClassroomComponent, children: [
    { path: 'section/:id', loadChildren: () => import('./section/section.module').then(m => m.SectionModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule { }
