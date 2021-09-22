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
  invalidPassword: boolean = false;
  
  constructor(private router: Router, private service: AdminService) { }

  ngOnInit(): void {
  }

  login(){
    this.invalidPassword = false;
    if(this.userName == "admin" && this.pswd == "admin"){
      localStorage.setItem("userId", "admin");
      localStorage.setItem("firstName", "Binitha");
      localStorage.setItem("lastName", "Sabu");
      localStorage.setItem("isAdmin", "Yes");
      this.router.navigate(['']);
      this.invalidPassword = false;
      localStorage.setItem("loggedIn", "Yes")
    }
    else{
    localStorage.setItem("isAdmin", "No");
    var user = new User();
    user.username = this.userName;
    user.password = this.pswd;
    this.service.login(user).subscribe((result:any)=>{
   console.log(result);
   if(result.length > 0){
     this.invalidPassword = false;
    localStorage.setItem("userId", result[0]._id);
    localStorage.setItem("firstName", result.firstName);
    localStorage.setItem("lastName", result.lastName);
    localStorage.setItem("loggedIn", "Yes")
     this.router.navigate(['']);
     console.log("login successs");
     

   }
   else{
      this.invalidPassword = true;
      localStorage.setItem("loggedIn", "No")
   }
    });

  }
}

}
