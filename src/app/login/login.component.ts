import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Role } from '../models/role';
import data from '../../assets/displayData.json';

import { AuthenticationService } from './service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  cardTitle: string;
  credentials: any;
  userError: string;
  pwdError: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
  }
  }

  ngOnInit(): void {
    this.initDisplay();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }

  initDisplay(){
    this.cardTitle = data.cardTitle;
    this.credentials = data.credentials;
    this.userError = data.userError;
    this.pwdError = data.pwdError;
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return ;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .subscribe(
            user => {
                if ( user.role && user.role === Role.Admin){
                  this.router.navigate(['/landing-page']);
                } else{
                  this.router.navigate(['/home']);
                }
             },
            error => {
                this.error = error;
                this.loading = false;
            });
    }

}
