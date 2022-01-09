import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookTicketsService } from 'src/app/Service/book-tickets.service';

@Component({
  selector: 'app-user-transition',
  templateUrl: './user-transition.component.html',
  styleUrls: ['./user-transition.component.css']
})
export class UserTransitionComponent implements OnInit {

  bookTickets:any;

  email:any;

  constructor(private service: BookTicketsService,
      private router:Router
    ) { }

  ngOnInit(): void {
    this.email=localStorage.getItem("email");

    this.service.getAllTicketsByEmail(this.email).subscribe((response) => {
      console.log(response);
      this.bookTickets=response;
    });
  }

  viewdetails(bookid:any)
  {
    console.log(bookid);
    this.router.navigate(['/bookdetails',bookid]);
  }

}
