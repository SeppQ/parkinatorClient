import { TestBed } from '@angular/core/testing';

import { CcDataService } from './cc-data.service';

describe('CcDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CcDataService = TestBed.get(CcDataService);
    expect(service).toBeTruthy();
  });
});
