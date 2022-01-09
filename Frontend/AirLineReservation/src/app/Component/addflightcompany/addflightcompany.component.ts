import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flightcompany } from 'src/app/Class/flightcompany';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-addflightcompany',
  templateUrl: './addflightcompany.component.html',
  styleUrls: ['./addflightcompany.component.css']
})
export class AddflightcompanyComponent implements OnInit {

  addFlightCompanyForm: FormGroup | any;
  submitted = false;

  flightCompany: Flightcompany = new Flightcompany();

  constructor(private formBuilder: FormBuilder,
    private aService: AdminService,
    private router: Router,
    private loc:Location
  ) { }

  ngOnInit(): void {

    this.addFlightCompanyForm = this.formBuilder.group({
      companyname: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', [Validators.required]],
      code: ['', [Validators.required, Validators.minLength(2)]]

    });
  }

  get f() { return this.addFlightCompanyForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.flightCompany = this.addFlightCompanyForm.value;
    if (this.addFlightCompanyForm.invalid) {
      return;
    }

    this.save();
  }


  save() {
    this.aService.addFlightCompany(this.flightCompany).subscribe((response) => {
      // console.log(response);
      this.loc.back();
      // this.router.navigate(['/admin']);
    })
  }

}

