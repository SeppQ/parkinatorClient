import { TestBed } from '@angular/core/testing';

import { LotsService } from './lots.service';

describe('LotsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LotsService = TestBed.get(LotsService);
    expect(service).toBeTruthy();
  });
});
