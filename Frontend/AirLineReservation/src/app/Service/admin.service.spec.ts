import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;
  let http: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check getAdmins method', () => {
    expect(service.getAdmins()).toBeTruthy();
  });

  it('sholud check all variables values',() => { 
    expect(service.alladmins).toEqual("http://localhost:8090/admincontent");
    expect(service.addadmin).toEqual("http://localhost:8090/admincontent");
    expect(service.addairport).toEqual("http://localhost:8090/airport");
    expect(service.addCompany).toEqual("http://localhost:8090/flightcompany/save");
    expect(service.flight).toEqual("http://localhost:8090/flight");
    expect(service.allairports).toEqual("http://localhost:8090/airport");
  })

});
