import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/Service/flight.service';
import { SeatTypeService } from 'src/app/Service/seat-type.service';

@Component({
  selector: 'app-show-all-flights',
  templateUrl: './show-all-flights.component.html',
  styleUrls: ['./show-all-flights.component.css']
})
export class ShowAllFlightsComponent implements OnInit {

  from: any;
  to: any;
  date: any;

  allFlights: any;

  flightDetails: any;
  flightdetails: any;

  email: any;
  checkuser: boolean = false;

  showcheck: boolean = false;

  id: number = 0;

  seatdata: any;

  constructor(private service: FlightService,
    private router: Router,
    private seatService: SeatTypeService
  ) { }

  ngOnInit() {
    localStorage.removeItem("flight");

    this.email = localStorage.getItem("email");
    if (this.email != null) {
      this.checkuser = true;
    }

    this.getAllFlights();
  }

  getAllFlights() {
    this.service.getAllFlights().subscribe((response) => {
      // console.log(response);
      this.allFlights = response;
    });
  }

  raset() {
    this.from = null;
    this.to = null;
    this.date = null;
  }

  getSeatType(flightid: any, seatType: any, i: number) {
    // console.log(flightid, seatType);
    this.id = i
    this.showcheck = true;
    this.seatService.getDataByFlightAndSeatType(flightid, seatType).subscribe((Response) => {
      // console.log(Response);
      this.seatdata = Response;
    });

  }

  book(flightid: any) {
    this.router.navigate(['/selectseat', flightid])
  }

  



}
