import { TestBed } from '@angular/core/testing';

import { ServiceDocumentService } from './service-document.service';

describe('ServiceDocumentService', () => {
  let service: ServiceDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
