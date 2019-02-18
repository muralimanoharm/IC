import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicsComponent } from './economics.component';

describe('EconomicsComponent', () => {
  let component: EconomicsComponent;
  let fixture: ComponentFixture<EconomicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
