import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NbActionsModule, NbIconModule, NbLayoutModule, NbMenuModule, NbMenuService, NbSidebarModule, NbSidebarService } from '@nebular/theme';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbIconModule,
    NbActionsModule
  ],
  providers: [NbSidebarService, NbMenuService]
})
export class DashboardModule { }
