import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardNumberValidator } from 'src/app/shared/CardNumberValidator';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  bookDetails:any;
  bookForm:any;

  upiForm:FormGroup | any;

  cardForm:FormGroup | any;


  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    this.bookDetails=localStorage.getItem("bookForm");
    this.bookForm=JSON.parse(this.bookDetails);
    console.log(this.bookForm);

    this.upiForm=this.fb.group({
      upiid:['',[Validators.required,Validators.pattern('[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}'), Validators.maxLength(20), Validators.minLength(8)]]
    });

    this.cardForm=this.fb.group({
      cardno: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
      recardno: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
      cvv: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
      cardhldername: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]]
    },{validator: CardNumberValidator});

  }

  get upi() { return this.upiForm.controls; }

  submitform()
  {

  }

}
