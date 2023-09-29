import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeeidwithuserid } from 'src/app/Models/employeeidwithuserid';
import { Task } from 'src/app/Models/task';
import { ProjectService } from 'src/app/Services/project.service';
import { TaskService } from 'src/app/Services/task.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-updatetaskstatus',
  templateUrl: './updatetaskstatus.component.html',
  styleUrls: ['./updatetaskstatus.component.css']
})
export class UpdatetaskstatusComponent implements OnInit {
  taskId: number =0
  projectId: number =0
  task: Task |undefined
  employeeIdWithUserId: Employeeidwithuserid | undefined;
  employeeIdWithUserIds: Employeeidwithuserid[] = [];
  projectTitle: string = '';
  status:string =''
  constructor(private router:Router,private route:ActivatedRoute,private taskService:TaskService,private projectService:ProjectService,private userService:UserService){}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.taskId = params['taskId'];
    });
      console.log(this.taskId)
      this.taskService.getTaskDetail(this.taskId).subscribe((res) => {
        console.log(res);
        this.task = res;
        this.projectId = res.projectId;
        console.log(this.projectId);
        this.projectService.getProjectTitle(this.projectId).subscribe((res) => {
          this.projectTitle = res;
          console.log(res);
        console.log(this.projectId)
        this.projectService
          .getEmployeeIdWithUserId(this.projectId)
          .subscribe((res) => {
            this.employeeIdWithUserIds = res;
            console.log(this.employeeIdWithUserIds)
            let userIds = this.employeeIdWithUserIds.map((e) => e.userId);
            let employeeIdWithUserIdsString = userIds.join(',');
            console.log(employeeIdWithUserIdsString)
            this.userService
              .getUserNamesWithId(employeeIdWithUserIdsString)
              .subscribe((res) => {
                let teamMemberName = res;
                console.log(teamMemberName);
                this.employeeIdWithUserIds.forEach((item) => {
                  let matchingItem = teamMemberName.find(
                    (element) => element.id === item.userId
                  );
                  if (matchingItem != undefined)
                    item.employeeName = matchingItem.name;
                  console.log(matchingItem);
                });
              });
          });
        });
      });
  }
  showConfirmDialog() {
    const result = window.confirm('Are you sure you want to update the status?');
    if (result) {
      this.onSubmit();
    }
  }
onSubmit(){
  this.taskService.updateTaskStatus(this.taskId,this.task!.status).subscribe((res)=>{
  })
}
}
