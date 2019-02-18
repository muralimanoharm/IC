import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocardsComponent } from './cryptocards.component';

describe('CryptocardsComponent', () => {
  let component: CryptocardsComponent;
  let fixture: ComponentFixture<CryptocardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptocardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
