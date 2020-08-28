import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RegisterStudentService } from './register-student.service';
import { apiURL } from '../../api-urls';

describe('RegisterStudentService', () => {
  let service: RegisterStudentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RegisterStudentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud return an Observable<StudentResponse>', () => {
    const dummyFormData = {
      stdCourse: 'testCourse',
      stdName: 'testName'
    };
    const dummyStudent = {
      studentId: 5,
      studentName: 'Joshua',
      studentCourse: 'HADOOP'
  };
    service.registerStudent(dummyFormData).subscribe(student => {
      expect(student).toEqual(dummyStudent);
    });

    const req = httpMock.expectOne(apiURL.registerStudent);
    expect(req.request.method).toBe('POST');
    req.flush(dummyStudent);
  });
});
