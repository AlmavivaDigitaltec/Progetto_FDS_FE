import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotabileFormComponent } from './prenotabile-form.component';

describe('PrenotabileFormComponent', () => {
  let component: PrenotabileFormComponent;
  let fixture: ComponentFixture<PrenotabileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotabileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotabileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
