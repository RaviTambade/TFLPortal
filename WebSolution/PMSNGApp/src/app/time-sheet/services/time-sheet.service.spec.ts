import { TestBed } from '@angular/core/testing';

import { TimeSheetService } from './time-sheet.service';

describe('TimeSheetService', () => {
  let service: TimeSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
