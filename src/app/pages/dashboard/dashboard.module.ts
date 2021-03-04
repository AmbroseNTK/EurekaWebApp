import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule, NbMenuService, NbPopoverModule, NbSidebarModule, NbSidebarService, NbTableModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { UserService } from 'src/app/services/user/user.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbIconModule,
    NbActionsModule,
    NbTabsetModule,
    NbCardModule,
    NbUserModule,
    NbPopoverModule,
    NbButtonModule
  ],
  providers: [NbSidebarService, NbMenuService, UserService]
})
export class DashboardModule { }
