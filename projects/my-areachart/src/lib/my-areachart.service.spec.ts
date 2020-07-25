import { TestBed } from '@angular/core/testing';

import { MyAreachartService } from './my-areachart.service';
import { Component } from '@angular/core';

describe('MyAreachartService', () => {
  let service: MyAreachartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAreachartService);
  });

  it('service is created', () => {
    expect(service).toBeTruthy();
  });
  
});
