import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchaindevComponent } from './blockchaindev.component';

describe('BlockchaindevComponent', () => {
  let component: BlockchaindevComponent;
  let fixture: ComponentFixture<BlockchaindevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchaindevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchaindevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
