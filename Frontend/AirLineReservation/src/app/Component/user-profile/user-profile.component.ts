import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/Class/profile';
import { AuthanticationService } from 'src/app/Service/authantication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile:Observable<Profile[]>| any;
  
  email:any;

  checkdata:boolean=false;

  constructor(private pservice:AuthanticationService,
    private router:Router
    ) { }

  ngOnInit(): void {
   this.email=localStorage.getItem("email");
    this.getUserDataFromDB();

  }

  getUserDataFromDB(){
    this.pservice.getUserByEmail(this.email).subscribe((p:{})=>{
    this.profile=p;
    this.checkdata=true;
    });
  }

  editprofile()
  {
    this.router.navigate(['/edit',this.email])
  }

  changePassword()
  {
    this.router.navigate(['/changepassword']) 
  }


}
