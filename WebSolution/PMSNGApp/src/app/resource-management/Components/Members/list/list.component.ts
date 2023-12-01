import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MemberResponse } from 'src/app/resource-management/Models/MemberResponse';
import { MembersService } from 'src/app/resource-management/Services/members.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'projectmember-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  members: MemberResponse[] = [];
  @Input() projectId!: number;

  ImageServerUrl = environment.imagerServerUrl;
  @Output() selectedMemberId = new EventEmitter<number>();

  constructor(private membersSvc: MembersService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.membersSvc
      .getProjectMembers(changes['projectId'].currentValue)
      .subscribe((res) => {
        this.members = res;
        this.selectedMemberId.emit(this.members[0].memberId);
      });
  }
  
  onClickMember(memberId: number) {
    this.selectedMemberId.emit(memberId);
  }
}
