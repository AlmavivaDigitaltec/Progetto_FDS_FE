import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliPrenotazioniComponent } from './dettagli-prenotazioni.component';

describe('DettagliPrenotazioniComponent', () => {
  let component: DettagliPrenotazioniComponent;
  let fixture: ComponentFixture<DettagliPrenotazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliPrenotazioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliPrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
