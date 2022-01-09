import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AirportService } from 'src/app/Service/airport.service';
import { FlightService } from 'src/app/Service/flight.service';
import { SeatService } from 'src/app/Service/seat.service';
declare var $: any;

@Component({
  selector: 'app-select-seat-component',
  templateUrl: './select-seat-component.component.html',
  styleUrls: ['./select-seat-component.component.css']
})
export class SelectSeatComponentComponent implements OnInit {

  flightid: any;

  seatbooking: FormGroup | any;

  flightDetails:any;

  airPortDetails:any;

  checkdata:boolean=false;

  constructor(private aroute: ActivatedRoute,
    private router: Router,
    private seatService: SeatService,
    private flightService:FlightService,
    private airportService:AirportService
  ) {
   
  }

  ngOnInit(): void {
    this.flightid = this.aroute.snapshot.params['flightid'];
    this.flightService.getFlightById(this.flightid).subscribe((Response) => 
    {
      this.flightDetails=Response;
      this.getAirport();
    });
  }

  getAirport()
  {
    this.airportService.getAirportById(this.flightDetails.airportid).subscribe((Response) => 
    {
      this.airPortDetails=Response;
      this.checkdata=true;
    });
  }

  addpassenger()
  {
    this.router.navigate(['/addpassanger',this.flightid]);
  }
}
