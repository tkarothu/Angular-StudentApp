import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterStudentService } from './service/register-student.service';
import { RegisterForm } from '../models/registerForm';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  registrationForm  = new FormGroup({
    stdName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
     stdCourse: new FormControl('', [Validators.required])
  });
  public postId: string;
  public loading: boolean;
  public showAlert: boolean;
  public registerFormValue: RegisterForm;

  constructor(public registerStudentService: RegisterStudentService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    this.registerFormValue = this.registrationForm.value;
    this.registerStudentService.registerStudent(this.registerFormValue).subscribe(
        data => {
         if ( data.studentId){
          this.loading = false;
          this.postId = data.id;
          this.registrationForm.reset();
          this.showAlert = true;
         }
      }
    );
  }

  get stdName() { return this.registrationForm.get('stdName'); }
  get stdCourse() { return this.registrationForm.get('stdCourse'); }

}
