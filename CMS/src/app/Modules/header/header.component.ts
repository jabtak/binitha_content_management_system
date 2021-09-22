import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../shared/app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 signIn: boolean = false;
 admin: boolean = false;

 logOut(){
  localStorage.setItem("loggedIn", "No");
  localStorage.setItem("isAdmin", "No");
  this.router.navigate(['/sign-in']);
 }

  constructor(public appService: AppServiceService,private router: Router) {
    debugger;
    var loggedIn = localStorage.getItem("loggedIn");
    var isAdmin = localStorage.getItem("isAdmin");
    if(loggedIn == "Yes"){
      this.signIn = true;
      if(isAdmin == "Yes")
         this.admin = true;
      else 
        this.admin = false;
    }
    else
      this.signIn = false;
   }

  ngOnInit(): void {
  }

}
