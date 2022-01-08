import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Profile } from 'src/app/Class/profile';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  editForm: FormGroup | any;
  submitted = false;
  userid: any;

  email: any;

  profile: Profile = new Profile();

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private aroute:ActivatedRoute,
    private loc:Location,
    private uService: UserService) {
    this.editForm = this.formBuilder.group({
      userid: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      
      address: formBuilder.group({
        userhouseno: ['', [Validators.required]],
        userStreet: ['', [Validators.required]],
        usercity: ['', [Validators.required]],
        userstate: ['', [Validators.required]],
        usercountry: ['', [Validators.required]],
        userpincode: ['', [Validators.required]],
      }),
      passport: formBuilder.group({
        passportno: ['', [Validators.required]],
        issuedate: ['', [Validators.required]],
        expiredate: ['', [Validators.required]],
      })
      
    });
  }

  ngOnInit(): void {

    this.email=this.aroute.snapshot.params['email'];

    this.uService.getUserByUserId(this.email).pipe(first()).subscribe((response) => {
      this.editForm.patchValue(response);
    });
  }


  get f() { return this.editForm.controls; }

  
  onSubmit() {
    this.submitted = true;
    this.profile = this.editForm.value;
    if (this.editForm.invalid) {
      return;
    }
    this.save();
  }

  save() {
    this.uService.updateUser(this.profile, this.editForm.value.userid).subscribe((response) => {
      this.loc.back();
    });
  }
}
