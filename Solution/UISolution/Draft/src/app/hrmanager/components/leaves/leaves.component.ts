import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlType } from 'src/app/Entities/UrlType';


@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent {
 
  leaveMenuRoutes: UrlType[] = [
    { displayName: 'Leave', Url: 'applied' },
    { displayName: 'LeaveApplication', Url: 'leavesbystatus' },
    { displayName: 'todaysemployeeonleave', Url: 'todaysleave' }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.navigateUrl(this.leaveMenuRoutes[0].Url);
  }

  navigateUrl(url: string) {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
