import { TestBed } from '@angular/core/testing';

import { UserCarDataService } from './userCar-data.service';

describe('CarDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCarDataService = TestBed.get(UserCarDataService);
    expect(service).toBeTruthy();
  });
});
