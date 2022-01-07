import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthanticationService {

  baseURL = ' http://localhost:8090/user';

  constructor(private http: HttpClient) {
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}/login`, user)
  }

  getUserByEmail(userid: any): Observable<any> {
    return this.http.get(`${this.baseURL}/getbyemail/${userid}`);
  }

  getUserById(userid: any): Observable<any> {
    return this.http.get(`${this.baseURL}/getbyid/${userid}`);
  }

}