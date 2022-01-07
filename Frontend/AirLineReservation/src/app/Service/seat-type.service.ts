import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seattype } from '../Class/seattype';

@Injectable({
  providedIn: 'root'
})
export class SeatTypeService {

  baseURL = "http://localhost:8090/seat";

  seattype = 'http://localhost:8090/seattype/getall';

  constructor(private http: HttpClient) { }

  getDataByFlightAndSeatType(flightid: any, seattype: any): Observable<any> {
    return this.http.get(`${this.baseURL}/getdatabyflightidandseat/${flightid}/${seattype}`);
  }


  verifySeat(flightid: any, seat: any): Observable<any> {
    return this.http.put(`${this.baseURL}/verify/${flightid}`, seat);
  }

  getSeatType(): Observable<Seattype> {
    return this.http.get<Seattype>(`${this.seattype}`);
  }


  getSeatsById(flightid: any): Observable<any> {
    return this.http.get(`${this.baseURL}/getbyflightid/${flightid}`);

  }


  delete(seatid: any): Observable<any> {

    return this.http.delete(`${this.baseURL}/delete/${seatid}`);

  }

}
