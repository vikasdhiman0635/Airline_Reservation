import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UPIService {

  baseURL="http://localhost:8090/upi";

  constructor(private http:HttpClient) { }

  verifyByUPI(upiid:any):Observable<any>
  {
    return this.http.get(`${this.baseURL}/verifuupi/${upiid}`);
  }

  verifyByUPIWithCode(upi:any):Observable<any>
  {
    return this.http.post(`${this.baseURL}/verifyupibycode`,upi);
  }

}
