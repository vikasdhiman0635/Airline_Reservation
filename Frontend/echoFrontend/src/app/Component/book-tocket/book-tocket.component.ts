import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookTicketService } from '../../Service/book-ticket.service';
import { FlightService } from '../../Service/flight.service';
import { AirportService } from '../../Service/airport.service';

@Component({
  selector: 'app-book-tocket',
  templateUrl: './book-tocket.component.html',
  styleUrls: ['./book-tocket.component.css']
})
export class BookTocketComponent implements OnInit {

  seatid: any;

  userDetails: any;
  user: any;

  bookTicket: any
  flightDetails: any;
  airPortDetails: any;

  checkdata: boolean = false;

  constructor(private aroute: ActivatedRoute,
    private service: BookTicketService,
    private flightService: FlightService,
    private airportService: AirportService
  ) { }

  ngOnInit(): void {
    this.seatid = this.aroute.snapshot.params['bookid'];
    this.userDetails = localStorage.getItem("user");
    this.user = JSON.parse(this.userDetails);

    this.service.getTicketById(this.seatid).subscribe((response) => {
      this.bookTicket = response;
      this.getFlightdetails();
    });
  }

  getFlightdetails() {
    this.flightService.getFlightById(this.bookTicket.flightid).subscribe((Response) => {
      this.flightDetails = Response;
      this.getAirport();
    });
  }

  getAirport() {
    this.airportService.getAirportById(this.flightDetails.airportid).subscribe((Response) => {
      this.airPortDetails = Response;
      this.checkdata = true;
    });
  }

  print() {
    window.print();
  }

}
