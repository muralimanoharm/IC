import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoComponent } from './ico.component';

describe('IcoComponent', () => {
  let component: IcoComponent;
  let fixture: ComponentFixture<IcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
