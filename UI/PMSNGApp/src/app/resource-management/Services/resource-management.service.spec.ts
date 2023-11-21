import { TestBed } from '@angular/core/testing';

import { ResourceManagementService } from './resource-management.service';

describe('ResourceManagementService', () => {
  let service: ResourceManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
