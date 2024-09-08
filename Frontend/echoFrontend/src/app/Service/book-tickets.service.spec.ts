import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BookTicketsService } from './book-tickets.service';

describe('BookTicketsService', () => {
  let service: BookTicketsService;
  let obj:Object='';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(BookTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should create Methods',()=>{
    expect(service.getAllTicketsByEmail(obj)).toBeTruthy();
    expect(service.getBookDetailsById(obj)).toBeTruthy();

  });
});
