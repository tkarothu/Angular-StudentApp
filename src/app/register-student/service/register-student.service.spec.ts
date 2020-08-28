import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RegisterStudentService } from './register-student.service';

describe('RegisterStudentService', () => {
  let service: RegisterStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RegisterStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
