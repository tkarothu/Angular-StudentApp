import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { apiURL } from '../../api-urls';
import { StudentResponse } from '../../models/studentResponse';
import { RegisterForm } from '../../models/registerForm';
import { StudentReq } from '../../models/studentReq';

@Injectable({
  providedIn: 'root'
})
export class RegisterStudentService {

  constructor(private http: HttpClient) { }

  registerStudent(formValue: RegisterForm): Observable< any>{
    const reqBody: StudentReq = {
      studentName: formValue.stdName,
      studentCourse: formValue.stdCourse
    };
    return this.http.post< StudentResponse[] >(apiURL.registerStudent, reqBody);
  }
}
