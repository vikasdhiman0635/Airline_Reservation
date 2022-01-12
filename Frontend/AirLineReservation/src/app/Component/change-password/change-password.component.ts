import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changepassword:FormGroup | any;

  email:any;

  userDetails:any;
  user:any;

  constructor(private fb:FormBuilder,
      private service:UserService,
      private loc:Location
    ) { }

  ngOnInit(): void {
    this.email=localStorage.getItem("email");
    this.userDetails=localStorage.getItem("user");
    this.user=JSON.parse(this.userDetails);

    this.changepassword=this.fb.group({
      userid: [this.user.userid],
      email: [this.email],
      password: ['',[Validators.required, Validators.minLength(6)]]
    })

  }

  get f() { return this.changepassword.controls; }

  submit(){
    this.service.updatepassword(this.changepassword.value.userid,this.changepassword.value).subscribe((response) => {
      if(response.check==true)
      {
        this.loc.back();
      }
      else{
        alert(response.message);
      }
    });
  }

}
