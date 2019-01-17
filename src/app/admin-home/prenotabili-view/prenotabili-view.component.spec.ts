import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotabiliViewComponent } from './prenotabili-view.component';

describe('PrenotabiliViewComponent', () => {
  let component: PrenotabiliViewComponent;
  let fixture: ComponentFixture<PrenotabiliViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotabiliViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotabiliViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
