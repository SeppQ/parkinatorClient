import { TestBed } from '@angular/core/testing';

import { UserDetailsDataService } from './user-details-data.service';

describe('UserDetailsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDetailsDataService = TestBed.get(UserDetailsDataService);
    expect(service).toBeTruthy();
  });
});
