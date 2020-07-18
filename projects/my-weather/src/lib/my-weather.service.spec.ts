import { TestBed } from '@angular/core/testing';

import { MyWeatherService } from './my-weather.service';

describe('MyWeatherService', () => {
  let service: MyWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
