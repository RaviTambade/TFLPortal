import { Component, OnInit } from '@angular/core';
import { UrlType } from '../../../shared/models/UrlType';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hrmanager-left-sidebar',
  templateUrl: './hrmanager-left-sidebar.component.html',
  styleUrls: ['./hrmanager-left-sidebar.component.css'],
})

export class HrmanagerLeftSidebarComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}



  hrManagerRoutes: UrlType[] = [
    { displayName: 'Dashboard', Url: 'dashboard' },
    { displayName: 'timesheet', Url: 'timesheet' },
    { displayName: 'projects', Url: 'projects' },
    { displayName: 'Events', Url: 'events' },
    { displayName: 'Leaves', Url: 'leave' },
    { displayName: 'Payroll', Url: 'payroll' },
    { displayName: 'Performence', Url: 'performance' },
  ];

  ngOnInit(): void {
    this.onClick(this.hrManagerRoutes[0].Url);
  }

  onClick(url: string) {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
