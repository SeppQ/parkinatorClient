import { TestBed } from '@angular/core/testing';

import { CarDataService } from './car-data.service';

describe('CarDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarDataService = TestBed.get(CarDataService);
    expect(service).toBeTruthy();
  });
});
