import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Class/user';
import { UpdatepasswordService } from 'src/app/Service/updatepassword.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {

  emailForm: FormGroup | any;
  email: string = '';
  user: User = new User();
  submitted = false;
  message: string = '';


  constructor(private pService: UpdatepasswordService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.emailForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.user = this.emailForm.value;
    // stop the process here if form is invalid
    if (this.emailForm.invalid) {
      return;
    }
    this.verifyemail();
  }

  verifyemail() {
    this.pService.verifyemail(this.emailForm.value.email).subscribe((response) => {
      
      if (response == true) {
        // localStorage.setItem("email", this.user.email);
        this.router.navigate(['/verifyphoneno',this.emailForm.value.email]);
      }
      else {
        this.message = 'Invalid-Email';
      }
    });
  }
}