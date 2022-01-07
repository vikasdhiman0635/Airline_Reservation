import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin: string = "Admin";

  profile: boolean = false;
  flights: boolean = false;
  team: boolean = false;
  airports: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.flights = true;
  }

  //profile component
  profileComponent() {
    this.team = false;
    this.profile = false;
    this.flights = false;
    this.airports = true;
  }

  //user component
  allFlightsComponent() {
    this.team = false;
    this.profile = false;
    this.flights = true;
    this.airports = false;
  }

  //team component
  teamComponent() {
    this.team = true;
    this.profile = false;
    this.flights = false;
    this.airports = false;
  }

  //airport component
  allairportsComponent() {

    this.team = false;
    this.profile = false;
    this.flights = false;
    this.airports = true;
  }
}
