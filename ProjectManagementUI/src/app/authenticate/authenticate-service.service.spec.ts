import { TestBed } from '@angular/core/testing';

import { AuthenticateServiceService } from './authenticate-service.service';

describe('AuthenticateServiceService', () => {
  let service: AuthenticateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
