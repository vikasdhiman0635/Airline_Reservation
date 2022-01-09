import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/Service/flight.service';
import { SeatTypeService } from 'src/app/Service/seat-type.service';
import { SeatService } from 'src/app/Service/seat.service';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {

  flightid: any;
  flightDetails: any;
  userDetails: any;
  user: any;

  allSeatsType: any;

  bookForm: FormGroup | any;

  checkgetdata:boolean=false;

  constructor(private aroute: ActivatedRoute,
    private service: FlightService,
    private fb: FormBuilder,
    private seatService: SeatService,
    private router: Router,
    private seattypeService: SeatTypeService
  ) { }

  ngOnInit(): void {
    this.userDetails = localStorage.getItem("user");
    this.user = JSON.parse(this.userDetails);
    
    this.bookForm = this.fb.group({
      flightid: this.flightid,
      userid: this.user.userid,
      email: this.user.email,
      bookseats: this.fb.array([this.getpassenger()])
    });

    

    this.flightid = this.aroute.snapshot.params['flightid'];
    
    this.service.getFlightById(this.flightid).subscribe((Response:any) => {
      this.flightDetails = Response;
      this.getAllSeat();
    });
  }

  getAllSeat() {
    this.seatService.getAllSeatsByFlightId(this.flightid).subscribe((Response:any) => {
      this.allSeatsType = Response;
      this.checkgetdata=true;
    })
  }

  get f() { return this.bookForm.controls; }

  get passenger() {
    return <FormArray>this.bookForm.get("bookseats");
  }

  addPassenger() {
    if (this.passenger.length < 5) {
      this.passenger.push(this.getpassenger());
    }
    else {
      alert("You can only Book Maximum 5 Tickets");
    }
  }

  removePassenger(index: any) {
    this.passenger.removeAt(index);
  }

  getpassenger() {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneno: ['', [Validators.required, Validators.minLength(6)]],
      passportno: ['', [Validators.required]],
      country: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      seattype: ['', [Validators.required]]
    });
  }

  submitform() {
    let bookdetail = this.bookForm.value;
    bookdetail.flightid = this.flightid;
    let seat = [];
    for (let i = 0; i < this.bookForm.value.bookseats.length; i++) {
      seat.push(this.bookForm.value.bookseats[i]);
    }
    this.seattypeService.verifySeat(this.flightid, seat).subscribe((Response) => {
      if (Response.check == true) {
        localStorage.setItem("bookForm", JSON.stringify(bookdetail));
        this.router.navigate(['/verifyTicket'])
      }
      else {
        alert(Response.message);
      }
    });
  }



}
