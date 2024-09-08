import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FlightService } from './flight.service';

describe('FlightService', () => {
  let service: FlightService;
  let obj:Object='';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(FlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create Methods',()=>{
    expect(service.getFlightById(obj)).toBeTruthy();
    expect(service.getAllFlights()).toBeTruthy();

  });
});
