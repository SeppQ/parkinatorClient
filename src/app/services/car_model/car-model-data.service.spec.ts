import { TestBed } from '@angular/core/testing';

import { CarModelDataService } from './car-model-data.service';

describe('CarModelDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarModelDataService = TestBed.get(CarModelDataService);
    expect(service).toBeTruthy();
  });
});
