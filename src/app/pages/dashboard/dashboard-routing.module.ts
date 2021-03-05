import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ExploreComponent } from './pages/courses/components/explore/explore.component';
import { MyCoursesComponent } from './pages/courses/components/my-courses/my-courses.component';
import { CoursesComponent } from './pages/courses/courses.component';

const routes: Routes = [{
  path: '', component: DashboardComponent, children: [
    {
      path: 'courses', component: CoursesComponent, children: [
        { path: 'explore', component: ExploreComponent },
        {
          path: 'my-courses', component: MyCoursesComponent
        },
        { path: '', redirectTo: 'explore' }
      ]
    },
    { path: "users", loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
    { path: "studio", loadChildren: () => import('./pages/studio/studio.module').then(m => m.StudioModule) },
    { path: 'classroom/:id', loadChildren: () => import('./pages/classroom/classroom.module').then(m => m.ClassroomModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
