import { TestBed } from '@angular/core/testing';

import { WeatherByLocationService } from './weather-by-location.service';

describe('WeatherByLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherByLocationService = TestBed.get(WeatherByLocationService);
    expect(service).toBeTruthy();
  });
});
