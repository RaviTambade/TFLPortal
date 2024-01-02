import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlType } from 'src/app/shared/models/UrlType';

@Component({
  selector: 'app-employee-left-sidebar',
  templateUrl: './employee-left-sidebar.component.html',
  styleUrls: ['./employee-left-sidebar.component.css'],
})
export class EmployeeLeftSidebarComponent implements OnInit {
  employeeRoutes: UrlType[] = [
    { displayName: 'Timesheet', Url: 'timesheet' },
    { displayName: 'Dashboard', Url: 'dashboard' },
    { displayName: 'Projects', Url: 'projects' },
    { displayName: 'Events', Url: 'events' },
    { displayName: 'Leaves', Url: 'leave' },
    { displayName: 'Payroll', Url: 'payroll' },
    { displayName: 'Performence', Url: 'performance' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.onClick(this.employeeRoutes[0].Url);
  }

  onClick(url: string) {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
