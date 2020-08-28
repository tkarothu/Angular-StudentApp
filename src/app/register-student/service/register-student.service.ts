import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { apiURL } from '../../api-urls';

@Injectable({
  providedIn: 'root'
})
export class RegisterStudentService {

  constructor(private http: HttpClient) { }

  registerStudent(formValue): Observable< any>{
    const reqBody = {
      studentName: formValue.stdName,
      studentCourse: formValue.stdCourse
    };
    return this.http.post< any >(apiURL.registerStudent, reqBody);
  }
}
