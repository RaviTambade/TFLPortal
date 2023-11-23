import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { UserDetail } from 'src/app/resource-management/Models/UserDetail';
import { ResourceManagementService } from 'src/app/resource-management/Services/resource-management.service';

@Component({
  selector: 'projectmember-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  members: UserDetail[] = [];
  @Input() projectId!: number;

  constructor(private resourceSvc: ResourceManagementService) {}

  ngOnChanges(changes: SimpleChanges) {

    this.resourceSvc.getProjectMembers(changes["projectId"].currentValue).subscribe((res) => {
      let memberIds = res.join(',');
      this.resourceSvc.getUserDetails(memberIds).subscribe((response) => {
        this.members = response;
      });
    });
  }
}
