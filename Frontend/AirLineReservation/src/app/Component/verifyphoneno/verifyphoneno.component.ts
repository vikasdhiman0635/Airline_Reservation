import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatepasswordService } from 'src/app/Service/updatepassword.service';

@Component({
  selector: 'app-verifyphoneno',
  templateUrl: './verifyphoneno.component.html',
  styleUrls: ['./verifyphoneno.component.css']
})
export class VerifyphonenoComponent implements OnInit {

  submitted = false;
  email:any;
  mobileno: string = '';
  message:string='';

  constructor(private pService: UpdatepasswordService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.email=localStorage.getItem("email");
  }

  verifyphone()
  {
    let data={
      "email":this.email,
      "phoneno":this.mobileno 
    }
    this.pService.verifyephone(data).subscribe((response) => {
      console.log(response);
      if(response==true)
      {
        localStorage.setItem("phoneno",this.mobileno);
        this.router.navigate(['/newpassword']);
      }
      else{
        this.message='Invalid Mobile Number!';
      }
    });
  }
}