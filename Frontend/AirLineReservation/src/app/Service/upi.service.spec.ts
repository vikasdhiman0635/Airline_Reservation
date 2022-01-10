import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UPIService } from './upi.service';

describe('UPIService', () => {
  let service: UPIService;
  let obj:any='';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(UPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check  baseURL and have verifyByUPI,verifyByUPICode Methods',()=>{
    expect(service.baseURL).toEqual("http://localhost:8090/upi");
    expect(service.verifyByUPI(obj)).toBeTruthy();
    expect(service.verifyByUPIWithCode(obj)).toBeTruthy();
  });
});
