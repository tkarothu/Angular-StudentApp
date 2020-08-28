import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiURL } from '../../api-urls';

@Injectable({
  providedIn: 'root'
})
export class StudentGridService {

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get(apiURL.getAllStudents);
  }
}
