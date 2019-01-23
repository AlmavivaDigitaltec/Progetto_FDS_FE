import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrenotabileFormComponent } from './update-prenotabile-form.component';

describe('UpdatePrenotabileFormComponent', () => {
  let component: UpdatePrenotabileFormComponent;
  let fixture: ComponentFixture<UpdatePrenotabileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePrenotabileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePrenotabileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
