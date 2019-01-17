import { TestBed, inject } from '@angular/core/testing';

import { PrenotabileService } from './prenotabile.service';

describe('PrenotabileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrenotabileService]
    });
  });

  it('should be created', inject([PrenotabileService], (service: PrenotabileService) => {
    expect(service).toBeTruthy();
  }));
});
