import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BookTicketService } from './book-ticket.service';

describe('BookTicketService', () => {
  let service: BookTicketService;
  let obj:Object='';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(BookTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create Method bookTicket',()=>{
    expect(service.bookTicket(obj)).toBeTruthy();
    

  });
});
