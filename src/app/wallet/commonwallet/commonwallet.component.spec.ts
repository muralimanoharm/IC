import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonwalletComponent } from './commonwallet.component';

describe('CommonwalletComponent', () => {
  let component: CommonwalletComponent;
  let fixture: ComponentFixture<CommonwalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonwalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
