import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock:HttpTestingController;
  let obj:any='';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UserService]
    });
    service = TestBed.inject(UserService);
    httpMock=TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 it('should create newUser, updateUser,getUserById Methods',()=>{
   expect(service.getUserByUserId(obj)).toBeTruthy();
   expect(service.newUser(obj)).toBeTruthy();
   expect(service.updateUser(obj,obj)).toBeTruthy();
 });
});
