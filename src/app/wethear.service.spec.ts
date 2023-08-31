import { TestBed } from '@angular/core/testing';

import { WethearService } from './wethear.service';

describe('WethearService', () => {
  let service: WethearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WethearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
