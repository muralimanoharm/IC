import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BountyProgramComponent } from './bounty-program.component';

describe('BountyProgramComponent', () => {
  let component: BountyProgramComponent;
  let fixture: ComponentFixture<BountyProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BountyProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BountyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
