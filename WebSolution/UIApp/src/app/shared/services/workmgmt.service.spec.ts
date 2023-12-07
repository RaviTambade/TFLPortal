import { TestBed } from '@angular/core/testing';

import { WorkmgmtService } from './workmgmt.service';

describe('WorkmgmtService', () => {
  let service: WorkmgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkmgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
