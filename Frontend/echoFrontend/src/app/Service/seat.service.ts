import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  baseURL="http://localhost:8090/bookflightseats/getflightbyseats";

  constructor(private http:HttpClient) { }

  getAllBookingseatbyid(flightid:any,seattype:any):Observable<any>
  {
    return this.http.get(`${this.baseURL}/${flightid}/${seattype}`);
  }

  getAllSeatsByFlightId(flightid:any):Observable<any>
  {
    return this.http.get(`http://localhost:8090/seat/getbyflightid/${flightid}`)
  }


}
