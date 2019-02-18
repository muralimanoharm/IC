import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinpriceComponent } from './coinprice.component';

describe('CoinpriceComponent', () => {
  let component: CoinpriceComponent;
  let fixture: ComponentFixture<CoinpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
