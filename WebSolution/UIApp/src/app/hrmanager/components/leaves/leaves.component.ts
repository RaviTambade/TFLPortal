import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlType } from 'src/app/shared/models/UrlType';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent {
 
  leaveMenuRoutes: UrlType[] = [
    // { displayName: 'All leave', Url: 'appliedleave' },
    { displayName: 'leave', Url: 'applied' },
    { displayName: 'employeeleave', Url: 'employeeleave' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.navigateUrl(this.leaveMenuRoutes[3].Url);
  }

  navigateUrl(url: string) {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
