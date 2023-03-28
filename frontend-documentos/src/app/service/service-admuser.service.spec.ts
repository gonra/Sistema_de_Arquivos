import { TestBed } from '@angular/core/testing';

import { ServiceAdmuserService } from './service-admuser.service';

describe('ServiceAdmuserService', () => {
  let service: ServiceAdmuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdmuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
