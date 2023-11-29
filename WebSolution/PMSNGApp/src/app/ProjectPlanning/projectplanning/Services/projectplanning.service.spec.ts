import { TestBed } from '@angular/core/testing';

import { ProjectplanningService } from './projectplanning.service';

describe('ProjectplanningService', () => {
  let service: ProjectplanningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectplanningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
