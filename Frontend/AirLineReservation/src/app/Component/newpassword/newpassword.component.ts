import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatepasswordService } from 'src/app/Service/updatepassword.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  submitted = true;
  email: any;
  mobileno: any;
  password: string = '';

  emailForm: FormGroup | any;

  constructor(private pService: UpdatepasswordService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.mobileno = localStorage.getItem("phoneno");
    this.email=this.route.snapshot.params['email'];
    this.emailForm = this.formBuilder.group({
      email: [this.email],
      phoneno: [this.mobileno],
      password: ['',[Validators.required]]
    });
  }

  resetpassword() {
    this.pService.resetpassword(this.emailForm.value, this.email).subscribe((response) => {
      console.log(response);
      localStorage.removeItem("phoneno");
      localStorage.removeItem("email");
      this.router.navigate(['/login'])
    });
  }
}
