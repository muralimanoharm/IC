import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoindetailsComponent } from './coindetails.component';

describe('CoindetailsComponent', () => {
  let component: CoindetailsComponent;
  let fixture: ComponentFixture<CoindetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoindetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
