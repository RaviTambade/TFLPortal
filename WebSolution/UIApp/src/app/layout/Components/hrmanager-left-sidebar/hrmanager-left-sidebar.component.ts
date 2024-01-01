import { Component } from '@angular/core';
import { UrlType } from '../../Services/UrlType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hrmanager-left-sidebar',
  templateUrl: './hrmanager-left-sidebar.component.html',
  styleUrls: ['./hrmanager-left-sidebar.component.css'],
})
export class HrmanagerLeftSidebarComponent {
  constructor(private router: Router) {}

  HRManagerRoutes: UrlType[] = [
    { displayName: 'AppliedLeaves', Url: 'leave' },
    { displayName: 'Appliedlist', Url: 'leave' },
  ];

  onClick(url: string) {
    this.router.navigate([url]);
  }
}
