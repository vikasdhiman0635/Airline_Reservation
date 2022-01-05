import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Class/book';
import { BookTicketService } from 'src/app/Service/book-ticket.service';
import { UPIService } from 'src/app/Service/upi.service';

@Component({
  selector: 'app-upicode',
  templateUrl: './upicode.component.html',
  styleUrls: ['./upicode.component.css']
})
export class UpicodeComponent implements OnInit {

  upiid: any;

  code: any;

  bookDetails: any;
  bookForm: any;

  billdetails: any;
  billForm: any;

  book = new Book();

  constructor(private aroute: ActivatedRoute,
      private service:UPIService,
      private bookService:BookTicketService,
      private router:Router
    ) { }
  ngOnInit(): void {
    this.upiid = this.aroute.snapshot.params['upiid'];
  }

  verify() {
    let jsonupi={
      upiid: this.upiid,
      code: this.code
    }

    this.service.verifyByUPIWithCode(jsonupi).subscribe((response) => {
      if(response == true)
      {
        this.bookDetails = localStorage.getItem("bookForm");
        this.bookForm = JSON.parse(this.bookDetails);
    
        this.billdetails = localStorage.getItem("bill");
        this.billForm = JSON.parse(this.billdetails);
    
        this.book.flightid = this.bookForm.flightid;
        this.book.email = this.bookForm.email;
        this.book.userid = this.bookForm.userid;
        this.book.ticketpaymentmethod = "UPI";
    
        this.book.bookseats = this.bookForm.bookseats;
    
        const upi = {
          upiid: this.upiid,
          totalamount: this.billForm.totalamount,
          paidamount: this.billForm.totalamount,
          paymentstatus: "Success",
        }
    
        this.book.paymentstatus=upi;
    
        localStorage.removeItem("bookForm");
        localStorage.removeItem("bill");
        localStorage.removeItem("card");

        this.booknow();
      }
      else{
        alert("Enter Valid Code");
      }
    });
  }

  booknow()
  {
    this.bookService.bookTicket(this.book).subscribe((response) => {
      if (response.check) {
        this.router.navigate(['/bookTicket', response.bookticket?.bookid]);
      }
    });
  }

}