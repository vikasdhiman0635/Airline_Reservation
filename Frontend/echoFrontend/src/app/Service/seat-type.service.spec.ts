import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SeatTypeService } from './seat-type.service';

describe('SeatTypeService', () => {
  let service: SeatTypeService;
  let obj:any='';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(SeatTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create Methods',()=>{
    expect(service.delete(obj)).toBeTruthy();
    expect(service.getSeatsById(obj)).toBeTruthy();
    expect(service.getSeatType()).toBeTruthy();
    expect(service.verifySeat(obj,obj)).toBeTruthy();
    expect(service.getDataByFlightAndSeatType(obj,obj)).toBeTruthy();
  });

});
