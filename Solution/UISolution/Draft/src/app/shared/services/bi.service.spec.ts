import { TestBed } from '@angular/core/testing';

import { BiService } from './bi.service';

describe('BiService', () => {
  let service: BiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
