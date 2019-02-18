import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadcoinsComponent } from './deadcoins.component';

describe('DeadcoinsComponent', () => {
  let component: DeadcoinsComponent;
  let fixture: ComponentFixture<DeadcoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadcoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadcoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
