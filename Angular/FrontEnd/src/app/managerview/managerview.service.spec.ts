import { TestBed } from '@angular/core/testing';

import { ManagerviewService } from './managerview.service';

describe('ManagerviewService', () => {
  let service: ManagerviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
