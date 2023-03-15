import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';



@Injectable({
  providedIn: 'root'
})
export class RoleService {

  ROLE_ADMIN: string = "ROLE_ADMIN";
  ROLE_EMPLOYEE: string = "ROLE_EMPLOYEE";
  isadmin:boolean = false;
  constructor(private authService: AuthenticationService) { 
    this.isadmin = this.isAdmin()? true : false;
  }

  public isAdmin(){
    if(this.authService.getEmpMaster().role == this.ROLE_ADMIN){
      return true;
    }else{
      return false;
    }
  }

  
}
