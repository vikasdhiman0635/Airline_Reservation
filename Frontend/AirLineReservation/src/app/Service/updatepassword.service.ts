import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatepasswordService {

  baseURL = 'http://localhost:8090/user/verifyemail';

  verifyno='http://localhost:8090/user/verifyforcrenditicals';

  reseturl='http://localhost:8090/user/updatepassword';

  constructor(private http: HttpClient) { }

  verifyemail(email: any): Observable<any> {
    return this.http.get(`${this.baseURL}/${email}`);
  }

  verifyephone(data:object):Observable<any>
  {
    return this.http.post(`${this.verifyno}`,data);
  }

  resetpassword(data:object,email:string):Observable<any>
  {
    return this.http.put(`${this.reseturl}/${email}`,data);
  }

}


