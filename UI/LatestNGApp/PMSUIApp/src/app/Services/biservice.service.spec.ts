import { TestBed } from '@angular/core/testing';

import { BIserviceService } from '../Models/Enums/biservice.service';

describe('BIserviceService', () => {
  let service: BIserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BIserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
