import { TestBed } from '@angular/core/testing';

import { MyProgressService } from './my-progress.service';

describe('MyProgressService', () => {
  let service: MyProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
