import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartBookingComponent } from './start-booking.component';

describe('StartBookingComponent', () => {
  let component: StartBookingComponent;
  let fixture: ComponentFixture<StartBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
