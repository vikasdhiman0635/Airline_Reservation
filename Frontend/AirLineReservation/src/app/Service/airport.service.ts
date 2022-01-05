import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  baseURL = "http://localhost:8090/airport";

  constructor(private http: HttpClient) { }

  getAllAirportLocations():Observable<any>
  {
    return this.http.get(`${this.baseURL}`);
  }

  getAirportById(airportid:any):Observable<any>
  {
    return this.http.get(`${this.baseURL}/${airportid}`)
  }

}
