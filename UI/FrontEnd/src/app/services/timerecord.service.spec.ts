import { TestBed } from '@angular/core/testing';

import { TimerecordService } from './timerecord.service';

describe('TimerecordService', () => {
  let service: TimerecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
