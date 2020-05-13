import { TestBed } from '@angular/core/testing';

import { VechilesService } from './vechiles.service';

describe('VechilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VechilesService = TestBed.get(VechilesService);
    expect(service).toBeTruthy();
  });
});
