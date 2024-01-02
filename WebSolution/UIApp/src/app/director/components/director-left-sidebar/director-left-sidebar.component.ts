import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UrlType } from 'src/app/shared/models/UrlType';

@Component({
  selector: 'app-director-left-sidebar',
  templateUrl: './director-left-sidebar.component.html',
  styleUrls: ['./director-left-sidebar.component.css'],
})
export class DirectorLeftSidebarComponent implements OnInit {
  directorRoutes: UrlType[] = [
    { displayName: 'Dashboard', Url: 'dashboard' },
    { displayName: 'Timesheet', Url: 'timesheet' },
    { displayName: 'Projects', Url: 'projects' },
    { displayName: 'Events', Url: 'events' },
    { displayName: 'Leaves', Url: 'leave' },
    { displayName: 'Payroll', Url: 'payroll' },
    { displayName: 'Performence', Url: 'performance' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.onClick(this.directorRoutes[0].Url);
  }

  onClick(url: string) {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
