import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AirportService } from 'src/app/Service/airport.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allAirport:any;

  searchForm:FormGroup | any;
  
  constructor(private service:AirportService,
      private fb:FormBuilder,
      private router:Router
    ) { }


  ngOnInit()
  {
    this.getAllAirport();

    this.searchForm=this.fb.group({
      from: ['',[Validators.required]],
      to: ['',[Validators.required]],
      fromtime: ['',[Validators.required]]
    });
  }

  getAllAirport()
  {
    this.service.getAllAirportLocations().subscribe((response) =>
    {
      this.allAirport=response;
      // console.log(this.allAirport);
    });
  }


  checkflights()
  {
    // console.log(this.searchForm.value);
    localStorage.setItem("flight",JSON.stringify(this.searchForm.value));
    this.router.navigate(['/searchflight']);
  }


}
