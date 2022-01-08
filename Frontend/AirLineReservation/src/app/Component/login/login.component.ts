import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthanticationService } from 'src/app/Service/authantication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;;
  email = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string = '';
  loginSuccess = false;
  submitted = false;
  isLoggedin = false;

  user: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private lservice: AuthanticationService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.user = this.loginForm.value;
    if (this.loginForm.invalid) {
      return;
    }
    this.checkLogin();
  }

  checkLogin() {
    this.lservice.login(this.user).subscribe((response) => {
      // console.log(response);
      if (response.login == true) {
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('email', response.user?.email);
        this.router.navigate(['/']);
      }
      else {
        alert(response.message);
      }
    });
    this.loginSuccess = false;
  }
}