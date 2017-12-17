import { LogsComponent } from './dashboard/logs.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ErrorComponent } from './error/error.component'
import { ForgetPasswordComponent } from './forget-password/forget-password.component'
import { ProfileComponent } from './dashboard/profile.component';

const routesDashboard: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'logs', component: LogsComponent }
]

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard/:usNm', component: DashboardComponent, children: routesDashboard },
  { path: 'forgot', component: ForgetPasswordComponent },
  { path: 'dashboard', redirectTo: 'dashboard/android' },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
