import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthanticationService } from 'src/app/Service/authantication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userDetails: any;
  user: any;

  email: any;

  checkuser:boolean=false;
  checkadmin:boolean=false;

  constructor(private router: Router,
    private service: AuthanticationService
  ) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("email");
    if (this.email != null) {
      this.userDetails = localStorage.getItem("user");
      this.user = JSON.parse(this.userDetails);
      this.checkuser=true;
      if(this.user.role=="Admin")
      {
        this.checkadmin=true;
      }
      // console.log(this.user);
      this.service.getUserById(this.user.userid).subscribe((Response) => {
        localStorage.setItem("user", JSON.stringify(Response));
      });
    }


  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.clear();
    window.location.reload();
    this.router.navigate(['/']);
  }

}
