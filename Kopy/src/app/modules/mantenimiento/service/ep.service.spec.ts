import { TestBed } from '@angular/core/testing';

import { EpService } from './ep.service';

describe('EpService', () => {
  let service: EpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
