import { Component, OnInit } from '@angular/core';
import { StudentGridService } from './service/student-grid.service';
@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.scss']
})
export class StudentGridComponent implements OnInit {

  public studentList:any;

  constructor(public studentGridService: StudentGridService) { }

  ngOnInit(): void {
    this.studentGridService.getStudents().subscribe(res => {
      if(res){
        this.studentList = res;
      }
    });
  }

}
