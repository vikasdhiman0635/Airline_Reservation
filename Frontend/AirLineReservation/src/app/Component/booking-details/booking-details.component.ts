import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookTicketsService } from 'src/app/Service/book-tickets.service';
import { FlightService } from 'src/app/Service/flight.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  bookid:any;

  bookTicket:any;
  flightDetails:any;
  
  check:boolean=false;

  constructor(private aroute:ActivatedRoute,
      private service:BookTicketsService,
    private flightService: FlightService
    ) { }

  ngOnInit(): void {

    this.bookid=this.aroute.snapshot.params["bookid"];
    // console.log(this.bookid);
    this.service.getBookDetailsById(this.bookid).subscribe((response) => {
      // console.log(response);
      this.bookTicket=response;
      this.getFlightdetails();
    });
  }

  getFlightdetails()
  {
    // console.log(this.bookTicket.flightid);
    this.flightService.getFlightById(this.bookTicket.flightid).subscribe((Response) => 
    {
      // console.log(Response);
      this.flightDetails=Response;
      this.check=true;
    });
  }

  print()
  {
    window.print();
  }

}
