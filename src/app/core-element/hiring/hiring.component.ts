import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeMaster } from 'src/app/class/EmployeeMaster';
import { RoleService } from 'src/app/service/role.service';
export class Hiring {
  constructor(
    public candidate_info: String,
    public jobOpenings: String,
    public status: String,
    public lastEmail: String
  ) {}
}
@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css'],
})
export class HiringComponent implements OnInit {
 
  hirings: Hiring[] = [];
  constructor(private httpClient: HttpClient, public roleService:RoleService ) {}

  ngOnInit(): void {
    this.gethiring();
  }
  gethiring() {
    this.httpClient
      .get<any>('http://localhost:8080/gethiring')
      .subscribe((Response) => {
        this.hirings = Response;
      });
  }
}
function http<T>(http: any) {
  throw new Error('Function not implemented.');
}

function gethiring() {
  throw new Error('Function not implemented.');
}
