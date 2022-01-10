import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthanticationService } from './authantication.service';

describe('AuthanticationService', () => {
  let service: AuthanticationService;
  let obj:Object='';

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AuthanticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create Method :login,getUserByEmail & ById',()=>{
    expect(service.login(obj)).toBeTruthy();
    expect(service.getUserByEmail(obj)).toBeTruthy();
    expect(service.getUserById(obj)).toBeTruthy();

  });

});
