import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Airport } from 'src/app/Class/airport';
import { first } from 'rxjs/operators';
import { AdminService } from 'src/app/Service/admin.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updateairport',
  templateUrl: './updateairport.component.html',
  styleUrls: ['./updateairport.component.css']
})
export class UpdateairportComponent implements OnInit {

  updateAirportForm: FormGroup | any;
  submitted = false;
  airportid: any;

  airport: Airport = new Airport();

  constructor(private formBuilder: FormBuilder,
    private aService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
    private loc:Location
  ) { }

  ngOnInit(): void {

    this.airportid = this.route.snapshot.params['airportid'];
    //values in form
    this.getdatainForm();
    this.updateAirportForm = this.formBuilder.group({
      airportid: ['', [Validators.required]],
      airportname: ['', [Validators.required]],
      airportcountry: ['', [Validators.required]],
      airportcity: ['', [Validators.required]],
      airportpincode: ['', [Validators.required, Validators.minLength(6)]],
      airportphoneno: ['', [Validators.required, Validators.minLength(10)]],
      adminemail: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.updateAirportForm.controls; }

  onSubmit() {
    this.submitted = true;

    this.airport = this.updateAirportForm.value;
    if (this.updateAirportForm.invalid) {
      return;
    }
    this.update();
  }

  update() {
    console.log(this.airportid);
    this.aService.updateAirport(this.airport, this.airportid).subscribe((response) => {
      console.log(response);
      this.airport = new Airport();

      this.loc.back();
    }, (error) => { this.getdatainForm(); });
  }

  getdatainForm() {
    this.aService.getAirportById(this.airportid)
      .pipe(first())
      .subscribe(x => this.updateAirportForm.patchValue(x));
  }
}