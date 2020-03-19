import { TestBed } from '@angular/core/testing';

import { PasswordRecoveryDataService } from './password-recovery-data.service';

describe('PasswordRecoveryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasswordRecoveryDataService = TestBed.get(PasswordRecoveryDataService);
    expect(service).toBeTruthy();
  });
});
