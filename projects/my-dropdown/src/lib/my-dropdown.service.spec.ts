import { TestBed } from '@angular/core/testing';

import { MyDropdownService } from './my-dropdown.service';

describe('MyDropdownService', () => {
  let service: MyDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
