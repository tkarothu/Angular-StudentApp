import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterStudentService {

  constructor(private http: HttpClient) { }

  registerStudent(formValue): Observable< any>{
    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    // const reqBody = {
    //   name: formValue.stdName,
    //   adress: formValue.stdAdress
    // }
    const name = formValue.stdName;
    const address = formValue.stdAdress
    return this.http.post< any >(`${environment.apiUrl}/register`, { name, address });
  }
}
