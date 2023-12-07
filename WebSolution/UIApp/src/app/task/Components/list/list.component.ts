import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { task } from '../../Models/task';
import { MemberResponse } from 'src/app/resource-management/Models/MemberResponse';
import { MembersService } from 'src/app/resource-management/Services/members.service';

@Component({
  selector: 'task-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(
    private service: TaskService,
    private membersvc: MembersService
  ) {}

  tasks: task[] = [];
  @Input() projectId!: number;
  member: MemberResponse | undefined;
  employeeId = 6;

  @Output() selectedTaskId = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    this.membersvc
      .getMember(changes['projectId'].currentValue, this.employeeId)
      .subscribe((res) => {
        this.member = res;

        this.service
          .getTaskOfMembers(
            changes['projectId'].currentValue,
            this.member.memberId
          )
          .subscribe((res) => {
            this.tasks = res;
            this.selectedTaskId.emit(this.tasks[0].id);
          });
      });
  }

  OnClickTask(taskId: number) {
    this.selectedTaskId.emit(taskId);
  }
}
