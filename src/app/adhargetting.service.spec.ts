import { TestBed } from '@angular/core/testing';

import { AdhargettingService } from './adhargetting.service';

describe('AdhargettingService', () => {
  let service: AdhargettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdhargettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
