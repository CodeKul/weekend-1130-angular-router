import { FormsComponent } from './forms/forms.component';
import { AuthService } from './dashboard/auth.service';
import { LogsComponent } from './dashboard/logs.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ErrorComponent } from './error/error.component'
import { ForgetPasswordComponent } from './forget-password/forget-password.component'
import { ProfileComponent } from './dashboard/profile.component';
import { TmpDrvnComponent } from './forms/tmp-drvn.component';
import { RctvComponent } from './forms/rctv.component';

const routesDashboard: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'logs', component: LogsComponent }
]

const routesReg: Routes = [
  { path: 'regTmp', component: TmpDrvnComponent },
  { path: 'regDt', component: RctvComponent }
]

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard/:usNm', component: DashboardComponent, children: routesDashboard, canActivate: [AuthService] },
  { path: 'forgot', component: ForgetPasswordComponent },
  { path: 'dashboard', redirectTo: 'dashboard/android' },
  { path: 'reg', component: FormsComponent, children: routesReg },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
