import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  subscribe: any;

  constructor() { }

  ngOnInit(): void {
  }

  check() { this.subscribe = null }

}
