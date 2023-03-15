import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }
  // url="http://localhost:8080/employee-profile"
  // apiUrl="http://localhost:8080/delete_employee/"
  apiUrl: string = environment.apiUrl;
  public getEmployee(){
    return this.http.get<any>(this.apiUrl+'/employee-profile');
  }
  public deleteEmployee(empId: string):Observable<Object>{
    return this.http.get<string>(this.apiUrl+'/delete_employee/'+empId,{responseType:'text' as 'json'});
  }
  public viewEmployee(empId:string):Observable<Object>{
    return this.http.get<any>(this.apiUrl+'/employee-profile/'+empId)
  }
  public updateEmployee(empId:string): Observable<Object> {
    return this.http.put<any>(this.apiUrl+'/update-employee/'+ empId,{responseType:'text' as 'json'});
  }
}
