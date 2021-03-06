import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {
  NbLayoutModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
  NbFormFieldModule,
  NbCheckboxModule
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,

    FormsModule,
    NbFormFieldModule,
    ReactiveFormsModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbCheckboxModule,
    CookieModule.forChild(),
    NgxTypedJsModule
  ]
})
export class LoginModule { }
