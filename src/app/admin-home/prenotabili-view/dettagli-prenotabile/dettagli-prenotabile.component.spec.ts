import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliPrenotabileComponent } from './dettagli-prenotabile.component';

describe('DettagliPrenotabileComponent', () => {
  let component: DettagliPrenotabileComponent;
  let fixture: ComponentFixture<DettagliPrenotabileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliPrenotabileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliPrenotabileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
