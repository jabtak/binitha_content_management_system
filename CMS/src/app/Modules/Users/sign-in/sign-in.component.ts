import { Component, OnInit } from '@angular/core';
import { User}from  '../model/user.model';
import { AdminService} from '../../shared/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userName: any="";
  pswd: any="";
  
  constructor(private router: Router, private service: AdminService) { }

  ngOnInit(): void {
  }

  login(){
    var user = new User();
    user.username = this.userName;
    user.password = this.pswd;
    this.service.login(user).subscribe((result:any)=>{
   console.log(result);
   if(result.length > 0){
     this.router.navigate(['blogs']);
     console.log("login successs");

   }
    })

  }

}
