import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookTicketsService {

  baseURL="http://localhost:8090/bookticket";

  constructor(private http:HttpClient) { }

  getAllTicketsByEmail(email:any):Observable<any>
  {
    return this.http.get(`${this.baseURL}/getticketbyemail/${email}`);
  }

  getBookDetailsById(bookid:any):Observable<any>
  {
    return this.http.get(`${this.baseURL}/getticketbyid/${bookid}`);
  }

}
