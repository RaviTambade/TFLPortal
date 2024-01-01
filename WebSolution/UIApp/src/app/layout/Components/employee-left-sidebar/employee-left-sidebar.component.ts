import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UrlType } from '../../Services/UrlType';

@Component({
  selector: 'app-employee-left-sidebar',
  templateUrl: './employee-left-sidebar.component.html',
  styleUrls: ['./employee-left-sidebar.component.css'],
})
export class EmployeeLeftSidebarComponent {
 

  constructor(private router: Router) {}
 

  EmployeeRoutes: UrlType[] = [
    { displayName: 'timesheet', Url: 'employee/timesheet' },
    { displayName: 'projects', Url: 'employee/projects' },
    { displayName: 'Events', Url: 'employee/events' },
    { displayName: 'Leaves', Url: 'employee/leave' },
    { displayName: 'Payroll', Url: 'employee/payroll' },
  ];

  onClick(url: string) {
    this.router.navigate([url]);
  }
}
