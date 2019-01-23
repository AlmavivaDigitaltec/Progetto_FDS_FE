import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioniFormComponent } from './prenotazioni-form.component';

describe('PrenotazioniFormComponent', () => {
  let component: PrenotazioniFormComponent;
  let fixture: ComponentFixture<PrenotazioniFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotazioniFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotazioniFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
