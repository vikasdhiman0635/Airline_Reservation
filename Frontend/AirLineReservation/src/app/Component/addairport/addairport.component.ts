import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Airport } from 'src/app/Class/airport';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-addairport',
  templateUrl: './addairport.component.html',
  styleUrls: ['./addairport.component.css']
})
export class AddairportComponent implements OnInit {

  addAirportForm: FormGroup | any;
  submitted = false;
  email: any;

  airport: Airport = new Airport();

  adminemail:any;

  constructor(private formBuilder: FormBuilder,
    private aService: AdminService,
    private router: Router,
    private loc:Location
  ) { }

  ngOnInit(): void {

    this.adminemail=localStorage.getItem("email");

    this.addAirportForm = this.formBuilder.group({
      airportname: ['', [Validators.required]],
      airportcountry: ['', [Validators.required]],
      airportcity: ['', [Validators.required]],
      airportpincode: ['', [Validators.required, Validators.minLength(6)]],
      airportphoneno: ['', [Validators.required, Validators.minLength(10)]],
      adminemail: [this.adminemail]
    });


    this.email = localStorage.getItem("email");

  }

  get f() { return this.addAirportForm.controls; }


  onSubmit() {
    this.submitted = true;
    this.airport = this.addAirportForm.value;
    if (this.addAirportForm.invalid) {
      return;
    }
    // console.log(this.addAirportForm);

    this.save();
  }


  save() {
    this.aService.addAirport(this.airport).subscribe((response) => {
      console.log(response);
      // this.router.navigate(['/admin']);
      this.loc.back();
    })
  }
}
