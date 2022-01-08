import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatepasswordService } from 'src/app/Service/updatepassword.service';

@Component({
  selector: 'app-verifyphoneno',
  templateUrl: './verifyphoneno.component.html',
  styleUrls: ['./verifyphoneno.component.css']
})
export class VerifyphonenoComponent implements OnInit {

  submitted = false;
  email: any;
  mobileno: string = '';
  message: string = '';

  emailForm: FormGroup | any;

  constructor(private pService: UpdatepasswordService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];
    // this.email = localStorage.getItem("email");
    // localStorage.removeItem("email");
    this.emailForm = this.formBuilder.group({
      email: [this.email],
      phoneno: ['', [Validators.required]]
    });
  }

  verifyphone() {
    console.log(this.emailForm.value);
    this.pService.verifyephone(this.emailForm.value).subscribe((response) => {
      console.log(response);
      if (response == true) {
        localStorage.setItem("phoneno", this.emailForm.value.phoneno);
        this.router.navigate(['/newpassword',this.email]);
      }
      else {
        this.message = 'Invalid Mobile Number!';
      }
    });
  }
}