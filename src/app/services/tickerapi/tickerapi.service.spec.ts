import { TestBed } from '@angular/core/testing';

import { TickerapiService } from './tickerapi.service';

describe('TickerapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TickerapiService = TestBed.get(TickerapiService);
    expect(service).toBeTruthy();
  });
});
