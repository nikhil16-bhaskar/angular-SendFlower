import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopBookingComponent } from './stop-booking.component';

describe('StopBookingComponent', () => {
  let component: StopBookingComponent;
  let fixture: ComponentFixture<StopBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
