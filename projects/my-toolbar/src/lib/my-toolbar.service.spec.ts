import { TestBed } from '@angular/core/testing';

import { MyToolbarService } from './my-toolbar.service';

describe('MyToolbarService', () => {
  let service: MyToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
