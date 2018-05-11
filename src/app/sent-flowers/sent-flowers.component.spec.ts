import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentFlowersComponent } from './sent-flowers.component';

describe('SentFlowersComponent', () => {
  let component: SentFlowersComponent;
  let fixture: ComponentFixture<SentFlowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentFlowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentFlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
