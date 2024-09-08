import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ContactForm:FormGroup | any;
  
  name:any;
  email:any;
  message:any;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    alert("Response submitted successfully, Thank you.");
    this.name=null;
    this.email=null;
    this.message=null;
  }

}
