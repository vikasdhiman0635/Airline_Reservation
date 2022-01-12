import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthanticationService } from 'src/app/Service/authantication.service';

@Component({
  selector: 'app-all-nav',
  templateUrl: './all-nav.component.html',
  styleUrls: ['./all-nav.component.css']
})
export class AllNavComponent implements OnInit {
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
      this.getByUserid(this.user.userid);
    }
  }

  getByUserid(userid:any)
  {
    this.service.getUserById(userid).subscribe((Response:any) => {
      localStorage.setItem("user", JSON.stringify(Response));
    });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.clear();
    // window.location.reload();
    this.router.navigate(['/']);
  }

}
