import { TestBed } from '@angular/core/testing';

import { TableService } from './table.service';

describe('TableService', () => {
  let service: TableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableService);
  });

  it('service is created', () => {
    expect(service).toBeTruthy();
  });
});
