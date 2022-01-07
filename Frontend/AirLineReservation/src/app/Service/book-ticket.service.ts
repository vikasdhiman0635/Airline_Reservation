import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookTicketService {

  baseURL="http://localhost:8090/bookticket";

  constructor(private http:HttpClient) { }

  bookTicket(book:any):Observable<any>
  {
    return this.http.post(`${this.baseURL}`,book);
  }

  getTicketById(bookid:any):Observable<any>
  {
    return this.http.get(`${this.baseURL}/getbyid/${bookid}`);
  }

}
