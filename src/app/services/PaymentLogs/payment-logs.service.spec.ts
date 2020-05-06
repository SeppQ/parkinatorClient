import { TestBed } from '@angular/core/testing';

import { PaymentLogsService } from './payment-logs.service';

describe('PaymentLogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentLogsService = TestBed.get(PaymentLogsService);
    expect(service).toBeTruthy();
  });
});
