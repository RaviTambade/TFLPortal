import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/shared/enums/role';
import { TokenClaims } from 'src/app/shared/enums/tokenclaims';
import { UrlType } from 'src/app/shared/models/UrlType';
import { JwtService } from 'src/app/shared/services/jwt.service';

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
