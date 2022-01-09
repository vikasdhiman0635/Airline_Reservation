import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Airport } from 'src/app/Class/airport';
import { Flight } from 'src/app/Class/flight';
import { Flightcompany } from 'src/app/Class/flightcompany';
import { Seattype } from 'src/app/Class/seattype';
import { AdminService } from 'src/app/Service/admin.service';
import { SeatTypeService } from 'src/app/Service/seat-type.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  addFlightForm: FormGroup | any;
  submitted = false;

  flightseats:any;

  flight:Flight=new Flight();

  //for ;seat
  type:Observable<Seattype>|any;
  sType:any;

  //for airport Id
  airport:Observable<Airport>|any;

  //for airport Id
  flightcompany:Observable<Flightcompany>|any;
 
  email:any;
  
  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private aService:AdminService,
    private seatService:SeatTypeService,
    private loc:Location
    ) { }

  ngOnInit(): void {

    this.email=localStorage.getItem("email");

      this.getSeatDataFromDB();

      this.getAirportDataFromDB();

      this.getFlightCompanyFromDB();
    

    this.addFlightForm = this.formBuilder.group({
      flightname: ['', [Validators.required]],
      flightfrom: ['', [Validators.required]],
      flightto: ['', [Validators.required]],
      flightfromtime: ['', [Validators.required]],
      flighttotime: ['', [Validators.required]],
      flightstatus: ['', [Validators.required]],
      flightgateno: ['', [Validators.required]],
      flightfromdate: ['', [Validators.required]],
      flighttodate: ['', [Validators.required]],
      flightcompanyname: ['', [Validators.required]],
      airportid: ['', [Validators.required]],
      adminemail: [this.email],
      flightseats: this.formBuilder.array([this.getSeats()]),

    });
  }

  getSeatDataFromDB()
  {
    this.seatService.getSeatType().subscribe((p: {}) => {
      this.type = p;
    });
   
  }


  get f() { return this.addFlightForm.controls; }

  get seat(){ return <FormArray>this.addFlightForm.get('flightseats')}

  addSeats(){

    if(this.seat.length<4)
    {
      this.seat.push(this.getSeats());
    }
    else{
      alert("Maximum limit reached")
    }
  }

  removeSeat(index:any){
    this.seat.removeAt(index);
  }

  getSeats(){

    return this.formBuilder.group({

     seattype:['',[Validators.required]],
     totalseats:['',[Validators.required]],
     seatprize:['',[Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.flight = this.addFlightForm.value;
    if (this.addFlightForm.invalid) {
      return;
    }
    // console.log(this.addFlightForm);

    this.save();
  }


  save() {
    //console.log(this.flight);
    this.aService.addFlight(this.flight).subscribe((response) => {
      // console.log(response);
      // this.router.navigate(['/admin']);
      this.loc.back();
    })
  }


  getAirportDataFromDB()
  {
    this.aService.getAirports().subscribe((p: {}) => {
      this.airport = p;
      //console.log(p);
    });
   // console.log(this.type);
   
  }

  getFlightCompanyFromDB(){
    this.aService.getAllFlightCompany().subscribe((p: {}) => {
      this.flightcompany = p;
      console.log(this.flightcompany);
    });
  }

}
