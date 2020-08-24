import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { StudentGridComponent } from './student-grid/student-grid.component';
import { LoginComponent } from './login/login.component';
import { fakeBackendProvider } from '../app/backend/fake-backend';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptor } from './guards/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegisterStudentComponent,
    StudentGridComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
