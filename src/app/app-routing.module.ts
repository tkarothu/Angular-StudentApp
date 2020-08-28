import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { StudentGridComponent } from './student-grid/student-grid.component';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './models/role';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'landing-page',
    component: LandingPageComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
    children: [
      {
        path: 'student-grid',
        component: StudentGridComponent
      }
    ]
  },
  {
    path: 'register-student',
    component: RegisterStudentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
