import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  taskId: number =0
  projectId: number =0
  task: Task | undefined;
  employeeIdWithUserId: Employeeidwithuserid | undefined;
  employeeIdWithUserIds: Employeeidwithuserid[] = [];
  projectTitle: string = '';
  assignedTask:Assignedtask={
    taskId: 0,
    teamMemberId: 0
  }
  assignTaskForm:FormGroup
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private projectService: ProjectService,
    private userService: UserService,
    private formBuilder:FormBuilder
  ) {
    this.assignTaskForm=this.formBuilder.group({
      taskId:['',Validators.required],
      teamMemberId:['',Validators.required]
    })
  }
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
  onSubmit(){
    if(this.assignTaskForm.valid){
      let assignedTask:Assignedtask={
        taskId:  this.assignTaskForm.get('taskId')?.value,
        teamMemberId: this.assignTaskForm.get('teamMemberId')?.value
      }
      this.taskService.addAssignedTask(assignedTask).subscribe((res)=>{
        if (res) {
          alert('task assigned Sucessfully');
          this.assignTaskForm.reset();
        }
        else{
          alert('data is inconsistent')
        }
      })
    }
  }
}
