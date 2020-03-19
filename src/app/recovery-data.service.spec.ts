import { TestBed } from '@angular/core/testing';

import { RecoveryDataService } from './recovery-data.service';

describe('RecoveryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecoveryDataService = TestBed.get(RecoveryDataService);
    expect(service).toBeTruthy();
  });
});
