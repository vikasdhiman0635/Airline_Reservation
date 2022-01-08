import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/Class/flight';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-allflights',
  templateUrl: './allflights.component.html',
  styleUrls: ['./allflights.component.css']
})
export class AllflightsComponent implements OnInit {

  flight: Observable<Flight[]> | any;

  flightid: any;


  constructor(private aService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllFlights();
  }

  getAllFlights() {
    this.aService.getAllFlights().subscribe((f: {}) => {
      this.flight = f;
    });
  }

  deleteFlight(flightid: string) {
    this.aService.deleteFlight(flightid).subscribe((response) => {
      console.log(response);
      this.getAllFlights();
    }, (error) => { this.getAllFlights() });
  }
  //updateFlight()
  updateFlight(flightid: any) {
    this.router.navigate(['/editflight', flightid]);
  }
}