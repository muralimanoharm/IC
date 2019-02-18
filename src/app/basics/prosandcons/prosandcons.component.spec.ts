import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsandconsComponent } from './prosandcons.component';

describe('ProsandconsComponent', () => {
  let component: ProsandconsComponent;
  let fixture: ComponentFixture<ProsandconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsandconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsandconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
