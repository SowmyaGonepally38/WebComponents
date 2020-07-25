import { TestBed } from '@angular/core/testing';

import { MyGridService } from './my-grid.service';

describe('MyGridService', () => {
  let service: MyGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyGridService);
  });

  it('service is created', () => {
    expect(service).toBeTruthy();
  });
});
