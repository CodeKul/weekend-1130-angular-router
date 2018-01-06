import { AuthService } from './dashboard/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ProfileComponent } from './dashboard/profile.component';
import { LogsComponent } from './dashboard/logs.component';
import { FormsComponent } from './forms/forms.component';
import { TmpDrvnComponent } from './forms/tmp-drvn.component';
import { RctvComponent } from './forms/rctv.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    ForgetPasswordComponent,
    ProfileComponent,
    LogsComponent,
    FormsComponent,
    TmpDrvnComponent,
    RctvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
