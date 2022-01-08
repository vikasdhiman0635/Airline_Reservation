import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Airport } from 'src/app/Class/airport';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-allairports',
  templateUrl: './allairports.component.html',
  styleUrls: ['./allairports.component.css']
})
export class AllairportsComponent implements OnInit {

  airport: Observable<Airport[]> | any;
  submitted = false;

  airportid: string = '';
  index: any;


  constructor(private aService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAirportsFromDB();
  }

  getAirportsFromDB() {

    this.aService.getAirports().subscribe((p: {}) => {
      this.airport = p;
    });

  }

  delete(airportid: string) {
    this.aService.deleteAirport(airportid).subscribe((response) => {
      console.log(response);
      this.getAirportsFromDB();
    }, (error) => { this.getAirportsFromDB() });

  }

  updateAirport(airportid: any) {
    console.log(airportid);
    this.router.navigate(['/editairport', airportid]);
  }
}
