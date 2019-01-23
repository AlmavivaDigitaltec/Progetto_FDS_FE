import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrenotazioniFormComponent } from './update-prenotazioni-form.component';

describe('UpdatePrenotazioniFormComponent', () => {
  let component: UpdatePrenotazioniFormComponent;
  let fixture: ComponentFixture<UpdatePrenotazioniFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePrenotazioniFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePrenotazioniFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
