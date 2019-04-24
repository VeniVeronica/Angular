import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './logIn/LogIn.component'
import { SignInComponent } from './sign-in/SignIn.component';
import {WelcomeComponent} from "./welcome/welcome.component";
import { CalendarComponent } from './calendar/calendar.component';
const routes: Routes = [
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path:'welcome/:userName',
    component: WelcomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
