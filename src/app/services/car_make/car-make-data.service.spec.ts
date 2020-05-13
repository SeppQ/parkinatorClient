import { TestBed } from '@angular/core/testing';

import { CarMakeDataService } from './car-make-data.service';

describe('CarMakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarMakeDataService = TestBed.get(CarMakeDataService);
    expect(service).toBeTruthy();
  });
});
