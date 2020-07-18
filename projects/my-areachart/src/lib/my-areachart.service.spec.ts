import { TestBed } from '@angular/core/testing';

import { MyAreachartService } from './my-areachart.service';

describe('MyAreachartService', () => {
  let service: MyAreachartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAreachartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
