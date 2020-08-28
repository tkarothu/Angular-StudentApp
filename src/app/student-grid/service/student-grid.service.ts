import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../../api-urls';
import { StudentResponse } from '../../models/studentResponse';

@Injectable({
  providedIn: 'root'
})
export class StudentGridService {

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get<StudentResponse[]>(apiURL.getAllStudents);
  }
}
