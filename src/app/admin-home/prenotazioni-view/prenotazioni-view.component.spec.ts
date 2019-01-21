import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioniViewComponent } from './prenotazioni-view.component';

describe('PrenotazioniViewComponent', () => {
  let component: PrenotazioniViewComponent;
  let fixture: ComponentFixture<PrenotazioniViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotazioniViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotazioniViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
