import { TestBed } from '@angular/core/testing';

import { LoginDataService } from './login-data.service';

describe('LoginDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginDataService = TestBed.get(LoginDataService);
    expect(service).toBeTruthy();
  });
});
