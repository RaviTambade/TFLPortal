import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent implements OnInit {
  role = '';

  ngOnInit(): void {
    let role = localStorage.getItem('role');
    if (role != null) {
      this.role = role;
    }
  }

  EmployeeRoutes:string[]=["Projects","TimeSheet","Leaves","Payroll","Events"];

  DirectorRoutes:string[]=["Director Link 1","Director Link 2","Director Link 3","Director Link 4"];

//  obj={
//   displayName:'',
//   Url:''
// }

}
