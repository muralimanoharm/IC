import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeaddressComponent } from './fakeaddress.component';

describe('FakeaddressComponent', () => {
  let component: FakeaddressComponent;
  let fixture: ComponentFixture<FakeaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
