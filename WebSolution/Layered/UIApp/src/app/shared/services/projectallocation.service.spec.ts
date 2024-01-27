import { TestBed } from '@angular/core/testing';

import { ProjectallocationService } from './projectallocation.service';

describe('ProjectallocationService', () => {
  let service: ProjectallocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectallocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
