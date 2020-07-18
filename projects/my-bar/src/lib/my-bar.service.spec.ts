import { TestBed } from '@angular/core/testing';

import { MyBarService } from './my-bar.service';

describe('MyBarService', () => {
  let service: MyBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
