import {Component, OnInit } from '@angular/core';
import { StudentGridService } from './service/student-grid.service';
@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.scss']
})
export class StudentGridComponent implements OnInit {

  studentList:any;
  loading: boolean;

  constructor(public studentGridService: StudentGridService) { }

  ngOnInit(): void {
    this.loading = true;
    this.studentGridService.getStudents().subscribe(res => {
      this.loading =  false;
      if(res){
       this.studentList = res;
      }
    });
  }

}
