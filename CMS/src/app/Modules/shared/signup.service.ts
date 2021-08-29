import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { User } from './../Users/model/user.model';

@Injectable()
export class SignupService {

  readonly baseURL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {

   }

  addUser(emp: User
    ) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  //putEmployee(emp: User) {
    //return this.http.put(this.baseURL + `/${emp._id}`, emp);
  //}

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}