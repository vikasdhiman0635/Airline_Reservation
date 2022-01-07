import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookSeats } from 'src/app/Class/book-seats';
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


  // bookSeats: any = [];


  // firstclass: any[][] | any;
  // bussinessclass: any[][] | any;
  // preminumecnomiyclass: any[][] | any;
  // economicclass: any[][] | any;


  constructor(private aroute: ActivatedRoute,
    private router: Router,
    private seatService: SeatService,
    private flightService:FlightService,
    private airportService:AirportService
  ) {
    // this.firstclass = [
    //   [1, 2, 3, 4],
    //   [5, 6, 7, 8]
    // ];

    // this.bussinessclass = [
    //   [1, 2, 3, 4, 5, 6],
    //   [7, 8, 9, 10, 11, 12],
    //   [13, 14, 15, 16, 17, 18],
    //   [19, 20, 21, 22, 23, 24]
    // ];

    // this.preminumecnomiyclass = [
    //   [1, 2, 3, 4, 5, 6],
    //   [7, 8, 9, 10, 11, 12],
    //   [13, 14, 15, 16, 17, 18],
    //   [19, 20, 21, 22, 23, 24]
    // ];

    // this.economicclass = [
    //   [1, 2, 3, 4, 5, 6, 7, 8],
    //   [9, 10, 11, 12, 13, 14, 15, 16],
    //   [17, 18, 19, 20, 21, 22, 23, 24],
    //   [25, 26, 27, 28, 29, 30, 31, 32],
    //   [33, 34, 35, 36, 37, 37, 39, 40],
    //   [41, 42, 43, 44, 45, 46, 47, 48],
    //   [49, 50, 51, 52, 53, 54, 55, 56],
    //   [57, 58, 59, 60, 61, 62, 63, 64],
    //   [65, 66, 67, 68, 69, 70, 71, 72],
    //   [73, 74, 75, 76, 77, 78, 79, 80],
    //   [81, 82, 83, 84, 85, 86, 87, 88],
    //   [89, 90, 91, 92, 93, 94, 95, 96],
    //   [97, 98, 99, 100, 101, 102, 103, 104]
    // ];


  }

  ngOnInit(): void {
    // localStorage.setItem("user", JSON.stringify(this.user));

    this.flightid = this.aroute.snapshot.params['flightid'];
    this.flightService.getFlightById(this.flightid).subscribe((Response) => 
    {
      console.log(Response);
      this.flightDetails=Response;
      this.getAirport();
    });
  }

  getAirport()
  {
    this.airportService.getAirportById(this.flightDetails.airportid).subscribe((Response) => 
    {
      console.log(Response);
      this.airPortDetails=Response;
    });
  }

  addpassenger()
  {
    this.router.navigate(['/addpassanger',this.flightid]);
  }

  // getSeat(seat: any, id: any) {
  //   console.log(seat + "" + id);
  //   let seattype = '';
  //   if (seat === "F") {
  //     seattype = "First Class";
  //   }
  //   else if (seat === "B") {
  //     seattype = "Bussiness Class";
  //   }
  //   else if (seat === "P") {
  //     seattype = "Premium Economy Class"
  //   }
  //   else if (seat === "E") {
  //     seattype = "Economy Class";
  //   }
  //   this.service.getAllBookingseatbyid(this.flightid, seattype).subscribe((response) => {
  //     console.log(response.length);
  //     for (let i = 0; i < response.length; i++) {
  //       if (response[i].seatno === id) {
  //         alert("This seat is Already Booked");
  //       }
  //       else if (response.length === 0) {
  //         this.bookSeats.push(seat + "" + id);
  //         console.log(this.bookSeats);
  //         break;
  //       }
  //       else if (response[i].seatno !== id) {
  //         this.bookSeats.push(seat + "" + id);
  //         console.log(this.bookSeats);
  //         break;
  //       }
  //     }
  //   });
  // }

}
