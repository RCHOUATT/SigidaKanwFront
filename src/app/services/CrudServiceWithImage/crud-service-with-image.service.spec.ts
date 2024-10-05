import { TestBed } from '@angular/core/testing';

import { CrudServiceWithImageService } from './crud-service-with-image.service';

describe('CrudServiceWithImageService', () => {
  let service: CrudServiceWithImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudServiceWithImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
