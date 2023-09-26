import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignedtask } from 'src/app/Models/assignedtask';
import { Employeeidwithuserid } from 'src/app/Models/employeeidwithuserid';
import { Task } from 'src/app/Models/task';
import { ProjectService } from 'src/app/Services/project.service';
import { TaskService } from 'src/app/Services/task.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-assigntheunassignedtask',
  templateUrl: './assigntheunassignedtask.component.html',
  styleUrls: ['./assigntheunassignedtask.component.css'],
})
export class AssigntheunassignedtaskComponent implements OnInit {
  taskId: number | undefined;
  projectId: number | undefined;
  task: Task | undefined;
  employeeIdWithUserId: Employeeidwithuserid | undefined;
  employeeIdWithUserIds: Employeeidwithuserid[] = [];
  projectTitle: string = '';
  assignedTask:Assignedtask={
    taskId: 0,
    teamMemberId: 0
  }
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private projectService: ProjectService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.taskId = params['taskId'];
    });
    if (this.taskId !== undefined) {
      this.taskService.getTaskDetail(this.taskId).subscribe((res) => {
        console.log(res);
        this.task = res;
        this.projectId = res.projectId;
        console.log(this.projectId);
        this.projectService.getProjectTitle(this.projectId).subscribe((res) => {
          this.projectTitle = res;
          console.log(res);
        });
      });
      if (this.projectId !== undefined) {
        this.projectService
          .getEmployeeIdWithUserId(this.projectId)
          .subscribe((res) => {
            this.employeeIdWithUserIds = res;
            let userIds = this.employeeIdWithUserIds.map((e) => e.userId);
            let employeeIdWithUserIdsString = userIds.join(',');
            this.userService
              .getUserNamesWithId(employeeIdWithUserIdsString)
              .subscribe((res) => {
                let teamMemberName = res;
                console.log(teamMemberName);
                this.employeeIdWithUserIds.forEach((item) => {
                  let matchingItem = teamMemberName.find(
                    (element) => element.id === item.employeeId
                  );
                  if (matchingItem != undefined)
                    item.employeeName = matchingItem.name;
                  console.log(matchingItem);
                });
              });
          });
      }
    }
  }
}
