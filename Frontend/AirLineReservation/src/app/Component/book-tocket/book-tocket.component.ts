import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirportService } from 'src/app/Service/airport.service';
import { BookTicketService } from 'src/app/Service/book-ticket.service';
import { FlightService } from 'src/app/Service/flight.service';

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
  flightDetails:any;
  airPortDetails:any;

  checkdata:boolean=false;

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

  getFlightdetails()
  {
    this.flightService.getFlightById(this.bookTicket.flightid).subscribe((Response) => 
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

  print()
  {
    window.print();
  }

}
