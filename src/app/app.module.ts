import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NbCheckboxModule, NbDialogModule, NbFormFieldModule, NbGlobalPhysicalPosition, NbIconModule, NbInputModule, NbMenuModule, NbMenuService, NbSidebarModule, NbSidebarService, NbThemeModule, NbTimepickerModule, NbToastrModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CookieModule } from 'ngx-cookie';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    FormsModule,
    CookieModule.forRoot(),
    ReactiveFormsModule,
    NbFormFieldModule,
    HttpClientModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    NbToastrModule.forRoot({
      duration: 5000,
      destroyByClick: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT
    }),
    NbTimepickerModule.forRoot(),
    NbSidebarModule,
    NbMenuModule,
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbCheckboxModule
  ],
  providers: [NbSidebarService, NbMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
