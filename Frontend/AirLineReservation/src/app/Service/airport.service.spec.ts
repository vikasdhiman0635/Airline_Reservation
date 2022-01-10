import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AirportService } from './airport.service';

describe('AirportService', () => {
  let service: AirportService;
  let obj:Object='';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]

    });
    service = TestBed.inject(AirportService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.getAllAirportLocations()).toBeTruthy();
    expect(service.getAirportById(obj)).toBeTruthy();
  });

  it('should have 2 methods for getting airport by id And to get all airport location', () => {
    expect(service.getAllAirportLocations()).toBeTruthy();
    expect(service.getAirportById(obj)).toBeTruthy();
 
  });
});
