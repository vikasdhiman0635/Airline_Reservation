import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/Class/admin';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  admin: Observable<Admin[]> | any;
  submitted = false;

  adminemail: string = '';
  index:any;

  constructor(private aService: AdminService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadAdminsOnStart();
  }

  //load data
  loadAdminsOnStart(){
    this.aService.getAdmins().subscribe((p: {}) => {
      this.admin = p;
    });
  }

  newAdmin(): void {
    this.submitted = false;
    this.admin = new Admin();
  }

  save() {
    this.submitted = true;
    let email={
      "adminemail":this.adminemail
    }

    this.aService.newAdmin(email).subscribe((response) => {
      this.loadAdminsOnStart();
      this.adminemail='';
      // this.router.navigate(['/admin']);
    })
  }

  delete(adminemail:string){
    this.aService.delete(adminemail).subscribe((response)=>{
      console.log(response);
      this.loadAdminsOnStart();
    });
  }
}