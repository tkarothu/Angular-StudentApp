import { TestBed } from '@angular/core/testing';

import { StudentGridService } from './student-grid.service';

describe('StudentGridService', () => {
  let service: StudentGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
