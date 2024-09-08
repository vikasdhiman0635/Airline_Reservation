import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Class/admin';
import { Airport } from '../Class/airport';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  alladmins='http://localhost:8090/admincontent';

  addadmin='http://localhost:8090/admincontent';

  addairport='http://localhost:8090/airport';

  addCompany='http://localhost:8090/flightcompany/save';

  flight='http://localhost:8090/flight';

  allairports='http://localhost:8090/airport';


  constructor(private http:HttpClient) { }

  //to fetch all admins
  getAdmins(): Observable<Admin>{
    return this.http.get<Admin>(`${this.alladmins}`);
  }


  //saving new admin email
  newAdmin(admin:any): Observable<any>{
    console.log(admin);
    return this.http.post(this.addadmin,admin);
  }

  delete(adminemail:string):Observable<any>{
    return this.http.delete(`http://localhost:8090/admincontent/${adminemail}`, { responseType: 'text' });
  }

  addAirport(airport:Object):Observable<Object>{
    return this.http.post(`${this.addairport}`,airport);
  }

  addFlightCompany(fCompany:Object):Observable<Object>{
    return this.http.post(`${this.addCompany}`,fCompany);
  }

  // Flights Operations: 
  //to add flight
  addFlight(flight:Object):Observable<Object>{
    return this.http.post(`${this.flight}`,flight);
  }

  //to display all flights
  getAllFlights():Observable<Object>{
    return this.http.get(`${this.flight}`);
  }

  deleteFlight(flightid:string):Observable<any>{
    return this.http.delete(`${this.flight}/${flightid}`);
  }

  updateFlight(flight:any,flightid:string):Observable<any>{
    return this.http.put(`${this.flight}/${flightid}`,flight);
  }

  getFlightById(flightid:any){
    return this.http.get(`${this.flight}/flightbyid/${flightid}`);
  }

  //airports list

  getAirports():Observable<Airport>{
    return this.http.get<Airport>(`${this.allairports}`);
  }

  deleteAirport(airportid:any):Observable<any>{
    return this.http.delete<Airport>(`${this.allairports}/${airportid}`);
  }

  getAirportById(airportid:any){
    return this.http.get(`${this.allairports}/${airportid}`);
  }

  updateAirport(airport:any,airportid:any):Observable<any>{
    return this.http.put(`${this.allairports}/${airportid}`,airport);
  }


  getAllFlightCompany():Observable<any>
  {
    return this.http.get(`http://localhost:8090/flightcompany/all`);
  }
}
