import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Member } from 'src/app/resource-management/Models/Member';
import { UserDetail } from 'src/app/resource-management/Models/UserDetail';
import { MembersService } from 'src/app/resource-management/Services/members.service';

@Component({
  selector: 'projectmember-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  members: Member[] = [];
  @Input() projectId!: number;

  constructor(private membersSvc: MembersService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.membersSvc
      .getProjectMembers(changes['projectId'].currentValue)
      .subscribe((res) => {
        this.members = res;
        // let memberIds = res.join(',');
        // this.resourceSvc.getUserDetails(memberIds).subscribe((response) => {
        //   });
      });
  }
}
