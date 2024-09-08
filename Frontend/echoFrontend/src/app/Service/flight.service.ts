import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  baseURL = "http://localhost:8090/flight";

  constructor(private http:HttpClient) { }

  getAllFlights():Observable<any>
  {
    return this.http.get(`${this.baseURL}`);
  }

  getFlightById(flightid:any):Observable<any>
  {
    return this.http.get(`${this.baseURL}/flightbyid/${flightid}`);
  }

}
