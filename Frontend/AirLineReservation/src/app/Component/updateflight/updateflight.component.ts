import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Flight } from 'src/app/Class/flight';
import { AdminService } from 'src/app/Service/admin.service';
import { SeatTypeService } from 'src/app/Service/seat-type.service';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {

  updateFlightForm: FormGroup | any;
  submitted = false;
  index: number = 0;
  flight: Flight | any;
  flightid: any;

  flightseats: any;
  type: any;
  sType: any;

  seattype: any;

  updateForm:any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private aService: AdminService,
    private stService: SeatTypeService,
    private loc:Location
  ) { }

  ngOnInit(): void {

    this.getSeatDataFromDB();

    this.flight = new Flight();
    this.flightid = this.route.snapshot.params['flightid'];

    //values in form
    this.aService.getFlightById(this.flightid)
      .pipe(first())
      .subscribe((response) => 
        { 
          this.updateForm=response;
          this.updateFlightForm.patchValue(response);
          this.getSeatinList();
        });


    this.updateFlightForm = this.formBuilder.group({
      flightid: ['', [Validators.required]],
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
      adminemail: ['', [Validators.required, Validators.email]],
      flightseats: this.formBuilder.array([this.getSeats()]),

    });
  }


  getSeatinList() {
    this.stService.getSeatsById(this.flightid).subscribe((res) => {
      this.seattype = res;
    });
  }

  getSeatDataFromDB() {
    this.stService.getSeatType().subscribe((p: {}) => {
      this.type = p;
    });
    this.stService.getSeatType().subscribe((p: {}) => {
      this.type = p;
    })
  }

  get f() { return this.updateFlightForm.controls; }

  get seat() { return <FormArray>this.updateFlightForm.get('flightseats') }

  getSeats() {
    return this.formBuilder.group({
      seattype: ['', [Validators.required]],
      totalseats: ['', [Validators.required]],
      seatprize: ['', [Validators.required]],
      flightid: [this.flightid],
    });
  }

  addSeats() {
    let len=this.seat.length+this.seattype.length;
    if(len<4)
    {
      this.seat.push(this.getSeats());
    }
    else{
      alert("Maximum limit reachout");
    }
  }

  removeSeat(index: any) {
    this.seat.removeAt(index);
  }

  onSubmit() {
    this.submitted = true;
    // this.flight = this.updateFlightForm.value;
    if (this.updateFlightForm.invalid) {
      return;
    }
    let arr=[];
    // console.log(this.seattype.length);
    for(let i=0;i<this.seattype.length;i++)
    {
      // console.log(this.seattype[i]);
      arr.push(this.seattype[i]);
    }

    for(let i=0;i<this.updateFlightForm.value.flightseats.length;i++)
    {
      arr.push(this.updateFlightForm.value.flightseats[i]);
    }
    // console.log(arr);
    this.updateFlightForm.value.flightseats=arr;
    this.flight=this.updateFlightForm.value;
    // console.log(this.flight);
    this.update();
  }

  update() {
    console.log(this.flight);
    this.aService.updateFlight(this.flight,this.flightid).subscribe((response) => {
      // console.log(response);
      this.flight = new Flight();
      this.loc.back();
    })
  }

  delete(seatid: any) {

    this.stService.delete(seatid).subscribe((p) => {
      this.getSeatinList();
    }, (error) => { this.getSeatinList() });
  }
}
