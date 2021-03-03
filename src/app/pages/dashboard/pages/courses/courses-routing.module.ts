import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './components/explore/explore.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';

import { CoursesComponent } from './courses.component';

const routes: Routes = [{
  path: '', component: CoursesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
