import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UPIService } from './upi.service';

describe('UPIService', () => {
  let service: UPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
