import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Class/user';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup | any;
  submitted = false;
  user: User = new User();

  constructor(private formBuilder: FormBuilder, 
    private http: HttpClient, 
    private router: Router, 
    private uservice: UserService
    ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        email: ['', [Validators.required, Validators.email]],
        mobileno: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]

      }
    )
  }

  get f() { return this.signupForm.controls; }

  signUp() {
    this.submitted = true;
    this.user = this.signupForm.value;
    // stop the process here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }
    this.save();
  }

  save() {
    this.uservice.newUser(this.user).subscribe((response:any) => {
      // console.log(response);
      alert(response.message);
      if(response.user!=null)
      {
        this.router.navigate(['/login']);
      }
      else
      {
        return;
      }
    });
  }
}