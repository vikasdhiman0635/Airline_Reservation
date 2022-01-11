import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/Class/book';
import { BookTicketService } from 'src/app/Service/book-ticket.service';
import { CardService } from 'src/app/Service/card.service';

@Component({
  selector: 'app-card-code',
  templateUrl: './card-code.component.html',
  styleUrls: ['./card-code.component.css']
})
export class CardCodeComponent implements OnInit {

  code: any;

  bookDetails: any;
  bookForm: any;

  billdetails: any;
  billForm: any;

  cardDetails: any;
  cardForm: any;

  book = new Book();
  upicode: FormGroup | any;

  constructor(private servive: CardService,
    private bookService: BookTicketService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.cardDetails = localStorage.getItem("card");
    this.cardForm = JSON.parse(this.cardDetails);

    this.bookDetails = localStorage.getItem("bookForm");
    this.bookForm = JSON.parse(this.bookDetails);

    this.billdetails = localStorage.getItem("bill");
    this.billForm = JSON.parse(this.billdetails);

    this.upicode = this.fb.group({
      // upi: [this.upiid],
      code: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });

  }

  verify() {

    this.book.flightid = this.bookForm.flightid;
    this.book.email = this.bookForm.email;
    this.book.userid = this.bookForm.userid;
    this.book.ticketpaymentmethod = "Card";

    this.book.bookseats = this.bookForm.bookseats;

    const card = {
      cardno: this.cardForm.cardno,
      recardno: this.cardForm.recardno,
      cvv: this.cardForm.cvv,
      cardhldername: this.cardForm.cardhldername,
      totalamount: this.billForm.totalamount,
      paidamount: this.billForm.totalamount,
      paymentstatus: "Success",
    }

    this.book.paymentstatus = card;

    localStorage.removeItem("bookForm");
    localStorage.removeItem("bill");
    localStorage.removeItem("card");

    this.booknow();
  }

  booknow() {
    this.bookService.bookTicket(this.book).subscribe((response) => {
      if (response.check) {
        this.router.navigate(['/bookTicket', response.bookticket?.bookid]);
      }
    });
  }

}
