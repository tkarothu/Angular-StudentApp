import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StudentGridService } from './student-grid.service';
import { apiURL } from '../../api-urls';


describe('StudentGridService', () => {
  let service: StudentGridService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentGridService]
    });
    service = TestBed.inject(StudentGridService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<StudentResponse[]>', () => {
      const dummyStudents = [
        {
          studentId: 1,
          studentName: 'John',
          studentCourse: 'JAVA'
      },
      {
        studentId: 2,
        studentName: 'Jim',
        studentCourse: 'SPRINGBOOT'
    }];

      service.getStudents().subscribe(students => {
      expect(students).toEqual(dummyStudents);
    });

      const req = httpMock.expectOne(apiURL.getAllStudents);
      expect(req.request.method).toBe('GET');
      req.flush(dummyStudents);
  });
});
