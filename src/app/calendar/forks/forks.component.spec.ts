import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForksComponent } from './forks.component';

describe('ForksComponent', () => {
  let component: ForksComponent;
  let fixture: ComponentFixture<ForksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
