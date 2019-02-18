import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdropsComponent } from './airdrops.component';

describe('AirdropsComponent', () => {
  let component: AirdropsComponent;
  let fixture: ComponentFixture<AirdropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirdropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirdropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
