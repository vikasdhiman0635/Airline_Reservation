import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseURL="http://localhost:8090/card";

  constructor(private http:HttpClient) { }

  verifyCard(card:any):Observable<any>
  {
    return this.http.post(`${this.baseURL}/verify`,card);
  }

  verifyByCode(card:any):Observable<any>
  {
    return this.http.post(`${this.baseURL}/verifybycode`,card);
  }

}
