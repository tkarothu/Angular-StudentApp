import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StudentGridService } from './student-grid.service';

describe('StudentGridService', () => {
  let service: StudentGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(StudentGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
