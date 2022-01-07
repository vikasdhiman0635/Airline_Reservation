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

  EmailForm: FormGroup | any;
  email: string = '';
  user: User = new User();
  submitted = false;
  message: string = '';


  constructor(private pService: UpdatepasswordService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.EmailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.EmailForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.user = this.EmailForm.value;
    // stop the process here if form is invalid
    if (this.EmailForm.invalid) {
      return;
    }
    this.verifyemail();
  }

  verifyemail() {
    this.pService.verifyemail(this.user.email).subscribe((response) => {
      // console.log(response);
      if (response == true) {
        console.log(this.user.email);
        localStorage.setItem("email", this.user.email);
        this.router.navigate(['/verifyphoneno']);
      }
      else {
        this.message = 'Invalid-Email';
      }
    });
  }
}