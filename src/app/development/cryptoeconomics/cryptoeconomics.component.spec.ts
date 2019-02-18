import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoeconomicsComponent } from './cryptoeconomics.component';

describe('CryptoeconomicsComponent', () => {
  let component: CryptoeconomicsComponent;
  let fixture: ComponentFixture<CryptoeconomicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoeconomicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoeconomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
