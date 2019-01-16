import { TestBed, inject } from '@angular/core/testing';

import { PrenotazioneService } from './prenotazione.service';

describe('PrenotazioneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrenotazioneService]
    });
  });

  it('should be created', inject([PrenotazioneService], (service: PrenotazioneService) => {
    expect(service).toBeTruthy();
  }));
});
