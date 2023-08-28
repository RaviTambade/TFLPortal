import { TestBed } from '@angular/core/testing';

import { HRService } from './hr.service';

describe('HRService', () => {
  let service: HRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
