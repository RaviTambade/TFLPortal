import { Component, OnInit } from '@angular/core';
import { TimesheetEntryDetailsModel } from 'src/app/shared/Models/Timesheetmgmt/timesheetEntryDetailsModel';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { TasksManagementService } from 'src/app/shared/services/TaskMgmt/tasks-management.service';
import { TimesheetService } from 'src/app/shared/services/Timesheet/timesheet.service';

@Component({
  selector: 'timesheet-entry-detail',
  templateUrl: './timesheet-entry-detail.html',
})
export class TimesheetEntryDetail implements OnInit {


  timesheetEntry:TimesheetEntryDetailsModel={
    id: 0,
    taskId: 0,
    fromTime: '',
    toTime: '',
    timesheetId: 0,
    hours: 0,
    taskTitle: '',
    taskType: '',
    Description: '',
    projectId: 0,
    sprintId: 0,
    sprintTitle: '',
    projectTitle: ''
  }
  timesheetEntryId:number=53;

  constructor (private timesheetSvc:TimesheetService,
              private taskSvc:TasksManagementService,
              private projectSvc:ProjectService){}

  ngOnInit(): void {
    this.timesheetSvc.getEntryOfTimesheet(this.timesheetEntryId).subscribe((entry)=>{
      this.timesheetEntry.id=entry.id;
      this.timesheetEntry.fromTime=entry.fromTime;
      this.timesheetEntry.toTime=entry.toTime;
      this.timesheetEntry.hours=entry.hours;
      this.timesheetEntry.timesheetId=entry.timesheetId;
      this.timesheetEntry.taskId=entry.taskId;

      this.taskSvc.getTaskDetails(this.timesheetEntry.taskId).subscribe((task)=>{
        this.timesheetEntry.taskTitle=task.title;
        this.timesheetEntry.taskType=task.taskType;
        this.timesheetEntry.Description=task.description;
      });

      this.projectSvc.getSprintTask(this.timesheetEntry.taskId).subscribe((sprintask)=>{
       this.timesheetEntry.sprintId=sprintask.sprintId;
 
       this.projectSvc.getSprint(this.timesheetEntry.sprintId).subscribe((sprint)=>{
        this.timesheetEntry.sprintTitle=sprint.title;
        this.timesheetEntry.projectId=sprint.projectId;

        this.projectSvc.getProject(this.timesheetEntry.projectId).subscribe((project)=>{
          this.timesheetEntry.projectTitle=project.title;
        });
       });
      });
    });
  }

}
