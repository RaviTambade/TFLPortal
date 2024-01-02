import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UrlType } from 'src/app/shared/models/UrlType';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css'],
})
export class TimesheetComponent {
  
  timesheetMenuRoutes: UrlType[] = [
    { displayName: 'Timesheet', Url: 'list' },
    { displayName: 'View', Url: 'view' },
    { displayName: 'Analytics', Url: 'analytics' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.navigateUrl(this.timesheetMenuRoutes[0].Url);
  }

  navigateUrl(url: string) {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
