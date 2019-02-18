import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalityComponent } from './legality.component';

describe('LegalityComponent', () => {
  let component: LegalityComponent;
  let fixture: ComponentFixture<LegalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
