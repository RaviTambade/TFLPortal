import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlType } from 'src/app/shared/models/UrlType';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit{
 
  leaveMenuRoutes: UrlType[] = [
    { displayName: 'pendingleave', Url: 'pendingleave' },
    { displayName: 'add leave', Url: 'add' },
    { displayName: 'leave list', Url: 'list' },
    { displayName: 'leave', Url: 'leavecount' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.navigateUrl(this.leaveMenuRoutes[3].Url);
  }

  navigateUrl(url: string) {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
