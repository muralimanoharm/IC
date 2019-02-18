import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocoderComponent } from './cryptocoder.component';

describe('CryptocoderComponent', () => {
  let component: CryptocoderComponent;
  let fixture: ComponentFixture<CryptocoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptocoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
