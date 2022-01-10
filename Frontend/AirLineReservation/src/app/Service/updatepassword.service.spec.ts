import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UpdatepasswordService } from './updatepassword.service';

describe('UpdatepasswordService', () => {
  let service: UpdatepasswordService;
  let obj:any='';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(UpdatepasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check  baseURL and have verifyemail,verifyphone,resetpassword Methods',()=>{
    expect(service.baseURL).toEqual('http://localhost:8090/user/verifyemail');
    expect(service.verifyemail(obj)).toBeTruthy();
    expect(service.verifyephone(obj)).toBeTruthy();
    expect(service.resetpassword(obj,obj)).toBeTruthy();
  });
});
