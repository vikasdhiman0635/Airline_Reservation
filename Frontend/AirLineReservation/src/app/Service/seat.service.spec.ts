import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SeatService } from './seat.service';

describe('SeatService', () => {
  let service: SeatService;
  let obj:any='';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(SeatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check  baseURL and have getAllBookingseatbyid, getAllBookingseatbyFlightid Methods',()=>{
    expect(service.baseURL).toEqual("http://localhost:8090/bookflightseats/getflightbyseats");
    expect(service.getAllBookingseatbyid(obj,obj)).toBeTruthy();
    expect(service.getAllSeatsByFlightId(obj)).toBeTruthy();
  });
});
