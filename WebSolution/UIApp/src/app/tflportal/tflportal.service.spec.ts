import { TestBed } from '@angular/core/testing';

import { TflportalService } from './tflportal.service';

describe('TflportalService', () => {
  let service: TflportalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TflportalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
