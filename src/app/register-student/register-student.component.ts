import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterStudentService } from './service/register-student.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  registrationForm = new FormGroup({
    stdName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
     stdCourse: new FormControl('',[
      Validators.required
    ]),
    stdAdress: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  public postId: string;
  public loading: boolean;
  public showAlert: boolean;

  constructor(public registerStudentService: RegisterStudentService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    this.registerStudentService.registerStudent(this.registrationForm.value).subscribe(
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
