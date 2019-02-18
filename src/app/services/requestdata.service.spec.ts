import { TestBed } from '@angular/core/testing';

import { RequestdataService } from './requestdata.service';

describe('RequestdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestdataService = TestBed.get(RequestdataService);
    expect(service).toBeTruthy();
  });
});
