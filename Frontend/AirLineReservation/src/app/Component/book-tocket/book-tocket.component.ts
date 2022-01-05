import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-tocket',
  templateUrl: './book-tocket.component.html',
  styleUrls: ['./book-tocket.component.css']
})
export class BookTocketComponent implements OnInit {

  seatid:any;

  constructor(private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.seatid=this.aroute.snapshot.params['bookid'];
    console.log(this.seatid);
  }

}
