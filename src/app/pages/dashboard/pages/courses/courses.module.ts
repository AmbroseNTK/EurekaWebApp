import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { NbCardModule, NbRouteTabsetModule, NbTabsetModule } from '@nebular/theme';
import { ExploreComponent } from './components/explore/explore.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';


@NgModule({
  declarations: [CoursesComponent, ExploreComponent, MyCoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    NbTabsetModule,
    NbCardModule,
    NbRouteTabsetModule
  ]
})
export class CoursesModule { }
