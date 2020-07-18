import { TestBed } from '@angular/core/testing';

import { MyPieService } from './my-pie.service';

describe('MyPieService', () => {
  let service: MyPieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
