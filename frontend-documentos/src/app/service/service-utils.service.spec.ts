import { TestBed } from '@angular/core/testing';

import { ServiceUtilsService } from './service-utils.service';

describe('ServiceUtilsService', () => {
  let service: ServiceUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
