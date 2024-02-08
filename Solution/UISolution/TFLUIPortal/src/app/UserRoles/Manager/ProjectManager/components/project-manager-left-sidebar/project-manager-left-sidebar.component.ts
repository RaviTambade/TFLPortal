import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UrlType } from 'src/app/shared/Entities/UrlType';

@Component({
  selector: 'app-project-manager-left-sidebar',
  templateUrl: './project-manager-left-sidebar.component.html',
})
export class ProjectManagerLeftSidebarComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  projectManagerRoutes: UrlType[] = [
    { displayName: 'Dashboard', Url: 'dashboard' },
    { displayName: 'timesheet', Url: 'timesheet' },
    { displayName: 'projects', Url: 'projects' },
    { displayName: 'Events', Url: 'events' },
    { displayName: 'Leaves', Url: 'leave' },
    { displayName: 'Payroll', Url: 'payroll' },
    { displayName: 'Performence', Url: 'performance' },
  ];
  ngOnInit(): void {
    this.onClick(this.projectManagerRoutes[0].Url);
  }

  onClick(url: string) {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
