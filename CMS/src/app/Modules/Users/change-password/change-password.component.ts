import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {User} from './../model/user.model';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {AdminService
} from '../../shared/admin.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  user:User;
  userForm: FormGroup;
  isMail: boolean;
  isPswd: boolean;
  oldPassword: any="";
  passwordAuth: boolean = true;
  submitted: boolean;
  currentPassword: any="";
  constructor(private router:Router ,private service:AdminService, private formBuilder: FormBuilder) {
    this.user=new User();
    this.isMail = true;
    this.isPswd = true;
    this.submitted = false;
    this.userForm = this.formBuilder.group({
      username: [''],
      firstName: [''],
      lastName: [''],
      gender: [''],
      contact: [''],
      email: [''], 
      password: [''],
      confirmPassword:['']
    });
   }

 

  isValidPassword()
  {
    debugger;
    var pswd = this.user.password;
    if (pswd != null) {
      if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pswd)) {
        this.isPswd = true;
        return true;
      }
      else {
        this.isPswd = false;
        return false;
      }
    }
    else{
      this.isPswd = false;
      return false;
    }

  }

  

  ngOnInit(): void {
    this.getUser();
  
    }

    getUser(){
      var id = localStorage.getItem("userId");
      this.service.getUserById(id).subscribe((result: any)=>{
        this.user = result;
        this.oldPassword = this.user.password;
        this.user.password="";

      });
    }
    
    changePassword(){
      this.submitted = true;
      var id = localStorage.getItem("userId");
     if(this.oldPassword == this.currentPassword){
       this.passwordAuth = true;
     if(this.isValidPassword() && (this.user.password ==this.user.confirmPassword) && !Object.values(this.user).some(element => element == null || element == undefined)){  
       //alert("dd");
       
      this.service.updateUserProfile(id,this.user).subscribe((res) => {
        console.log(this.user);
        this.router.navigate(['/sign-in']);
       });
      }
    }
    else{
      this.passwordAuth = false;

    }
     }
    

}
