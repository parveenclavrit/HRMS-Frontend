import { Injectable } from '@angular/core';
import { EmployeeMaster } from '../class/EmployeeMaster';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  TOKEN_KEY: string = "id";
  TOKEN_VALUE: string = "password";
  USER_ROLE:string = "role";
  EMP_Master:string = "empMaster";
  isLogin:boolean = false;
  
  empMaster: EmployeeMaster = new EmployeeMaster;
  constructor() { 
    this.isLogin = this.getData(this.TOKEN_KEY)? true : false;
    
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(this.TOKEN_KEY, key);
    localStorage.setItem(this.TOKEN_VALUE, value);
    this.isLogin = true;
  }

  public saveEmpMaster(empMaster:EmployeeMaster) {
    localStorage.setItem(this.EMP_Master, JSON.stringify(empMaster));
  }

  public getData(key: string) {
    var data =  localStorage.getItem(key);
    if(data == undefined){
      data = "";
    }
    return data;
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
    this.isLogin = false;
  }

  public clearData() {
    localStorage.clear();
    this.isLogin = false;
  }

  public getEmpMaster(){
    var empMasterString = localStorage.getItem(this.EMP_Master);
    if(empMasterString != null){
     this.empMaster = JSON.parse(empMasterString);
    }
    console.log("empmaster in json "+this.empMaster);
    return this.empMaster;
  }

  public getRole(){
    return this.empMaster.role;
  }
   
}
