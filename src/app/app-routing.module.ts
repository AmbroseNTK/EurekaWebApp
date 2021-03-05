import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'courses', loadChildren: () => import('./pages/dashboard/pages/courses/courses.module').then(m => m.CoursesModule) },
  { path: 'section', loadChildren: () => import('./pages/dashboard/pages/classroom/section/section.module').then(m => m.SectionModule) },

  {
    path: '**',
    pathMatch: "full",
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
