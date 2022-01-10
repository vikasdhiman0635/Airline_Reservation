import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CardService } from './card.service';

describe('CardService', () => {
  let service: CardService;
  let obj:any='';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create Methods verify by code  and by card',()=>{
    expect(service.verifyByCode(obj)).toBeTruthy();
    expect(service.verifyCard(obj)).toBeTruthy();

  });
});
