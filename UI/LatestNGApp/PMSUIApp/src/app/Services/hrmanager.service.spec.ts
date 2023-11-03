import { TestBed } from '@angular/core/testing';

import { HrmanagerService } from './hrmanager.service';

describe('HrmanagerService', () => {
  let service: HrmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
