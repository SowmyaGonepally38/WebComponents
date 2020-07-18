import { TestBed } from '@angular/core/testing';

import { MyLinechartService } from './my-linechart.service';

describe('MyLinechartService', () => {
  let service: MyLinechartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLinechartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
