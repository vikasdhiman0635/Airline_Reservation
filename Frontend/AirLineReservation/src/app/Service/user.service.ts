import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  save = 'http://localhost:8090/user/save';

  baseURL = 'http://localhost:8090/user/update';

  constructor(private http: HttpClient) { }

  newUser(user: Object): Observable<Object> {
    return this.http.post(`${this.save}`, user);
  }

  updateUser(profile: any, userid: any): Observable<object> {
    return this.http.put(`http://localhost:8090/user/update/${userid}`, profile);
  }

  getUserByUserId(email:any):Observable<any>
  {
    return this.http.get(`http://localhost:8090/user/getbyemail/${email}`);
  }

  updatepassword(userid:any,user:any):Observable<any>
  {
    return this.http.put(`${this.baseURL}/updatepassword/${userid}`,user);
  }

}
