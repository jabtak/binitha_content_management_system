import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  role: any;
  constructor() { }
  

  hasTabAccess(roles: string) {
    var roleGroup;
    var roleArray;
    var loggedIn = localStorage.getItem("loggedIn");
    var isAdmin = localStorage.getItem("isAdmin");
    if(loggedIn == "Yes"){
      if(isAdmin == "Yes") this.role = "admin";
      else this.role = "regUser"
    }
    else{
      this.role = "user";
    }
   
    //this.role = localStorage.getItem('RoleNames');
    if (this.role != null && this.role != "") {
      roleGroup = roles.split(',');
      if (roleGroup.length > 0)
        roleGroup = roleGroup.map(function (x) { return x.toUpperCase() })

      if (this.role.length > 0) {
        roleArray = [];
        roleArray = this.role.split(',');
        if (roleArray.length > 0)
          roleArray = roleArray.map(function (x: any) { return x.toUpperCase() })
      }

      if (roleArray != undefined && roleArray.length > 0 && roleGroup != undefined && roleGroup.length > 0) {
        let found = false;
        for (var i = 0; i < roleGroup.length; i++) {
          if (roleArray.indexOf(roleGroup[i].toUpperCase()) > -1) {
            found = true;
            return true;
            break;
          }
        }
        if (!found)
          return false;
      }
      else {
        return false;
      }
    }
  }
}
