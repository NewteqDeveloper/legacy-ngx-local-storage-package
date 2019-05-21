import { TestBed } from '@angular/core/testing';

import { NgxLocalStorageService } from './ngx-local-storage.service';

describe('NgxLocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLocalStorageService = TestBed.get(NgxLocalStorageService);
    expect(service).toBeTruthy();
  });
});
