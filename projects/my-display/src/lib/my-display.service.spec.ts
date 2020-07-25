import { TestBed } from '@angular/core/testing';

import { MyDisplayService } from './my-display.service';

describe('MyDisplayService', () => {
  let service: MyDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDisplayService);
  });

  it('service is created', () => {
    expect(service).toBeTruthy();
  });
});
