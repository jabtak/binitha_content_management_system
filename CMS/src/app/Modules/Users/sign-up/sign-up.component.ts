import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {User} from './../model/user.model';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {SignupService} from '../../shared/signup.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:User;
  userForm: FormGroup;
  isMail: boolean;
  isPswd: boolean;
  submitted: boolean;
  constructor(private router:Router ,private service:SignupService, private formBuilder: FormBuilder) {
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

   isValidEmail() {
    var email = this.user.email;
    if (email != null) {
      if (/^\w+(['\.-]?[\w+]?)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this.isMail = true;
        return true;
      }
      else {
        this.isMail = false;
        return false;
      }
    }
    else{
      this.isMail = false;
      return false;
    }

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
    // var alumni = new Alumni()
    // alumni.fname= "ptcd";
    // alumni.lname ="dfdf";
    // alumni.contact ="dd";
    // alumni.gender = "ddds";
    // alumni.dob = "rete";
    // alumni.message= "ptcd";
    // alumni.city ="dfdf";
    // alumni.pincode ="dd";
    // alumni.state = "ddds";
    // alumni.district = "rete";
    // alumni.password = "fgfgf";
   
        // var employee = new Employee();
    // employee._id ="1";
    // employee.name = "binu";
    // employee.position = "ddd";
    // employee.salary = 1234;
    // employee.office = "london";
    // this.service.postEmployee(employee).subscribe((res) => {
    //  console.log(res);
    // });


    // this.service.postAlumni(alumni).subscribe((res) => {
    //   console.log(res);
    //  });
  
    }

    
    register(){
      this.submitted = true;
     
     if(this.isValidEmail() && (this.user.password ==this.user.confirmPassword) && !Object.values(this.user).some(element => element == null || element == undefined)){  
       //alert("dd");
       if(this.isValidPassword()){
         debugger;
      this.service.addUser(this.user).subscribe((res) => {
        console.log(this.user);
        this.router.navigate(['/sign-in']);
       });
      }
     }
    }

}
