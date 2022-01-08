import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TotalTickets } from 'src/app/Class/total-tickets';
import { FlightService } from 'src/app/Service/flight.service';
import { SeatService } from 'src/app/Service/seat.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  bookDetails: any
  bookForm: any;

  userdetails: any;
  user: any;

  tickets: TotalTickets | any;

  flightDetails: any;

  allSeatsType: any;

  totalBill: any;

  checkdata:boolean=false;

  constructor(private router: Router,
    private flightService: FlightService,
    private seatService: SeatService
  ) { }

  ngOnInit(): void {
    this.bookDetails = localStorage.getItem("bookForm");
    this.bookForm = JSON.parse(this.bookDetails);
    this.userdetails = localStorage.getItem("user");
    this.user = JSON.parse(this.userdetails);
    this.tickets = this.bookForm.bookseats;

    this.flightService.getFlightById(this.bookForm.flightid).subscribe((response) => {
      this.flightDetails = response;
      this.getAllSeat();
    });
  }

  getAllSeat() {
    this.seatService.getAllSeatsByFlightId(this.bookForm.flightid).subscribe((Response) => {
      this.allSeatsType = Response;
      this.getBill();
    })
  }


  getBill() {
    let total=0;
    let gst=9;
    for (let i = 0; i < this.tickets.length; i++) {
      for (let j = 0; j < this.allSeatsType.length; j++) {
        if (this.tickets[i].seattype == this.allSeatsType[j].seattype) {
          this.tickets[i].price=this.allSeatsType[j].seatprize;
          total = total + this.allSeatsType[j].seatprize;
        }
      }
    }
    let res=(total*gst)/100;
    this.totalBill=res+total;
    this.checkdata=true;
  }

  payment()
  {
    let bill={
      totalamount:this.totalBill
    };
    this.bookForm.bookseats=this.tickets;
    localStorage.setItem("bill",JSON.stringify(bill));
    localStorage.setItem("bookForm",JSON.stringify(this.bookForm));
    
    this.router.navigate(['/payment']);
  }


}
