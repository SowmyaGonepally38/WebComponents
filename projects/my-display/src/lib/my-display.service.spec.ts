import { TestBed } from '@angular/core/testing';

import { MyDisplayService } from './my-display.service';

describe('MyDisplayService', () => {
  let service: MyDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
