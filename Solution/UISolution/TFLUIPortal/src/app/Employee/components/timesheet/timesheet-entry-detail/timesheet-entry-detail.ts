import { Component, OnInit } from '@angular/core';
import { TimesheetEntryModel } from 'src/app/shared/Models/Timesheetmgmt/TimesheetEntryModel';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { TasksManagementService } from 'src/app/shared/services/TaskMgmt/tasks-management.service';
import { TimesheetService } from 'src/app/shared/services/Timesheet/timesheet.service';

@Component({
  selector: 'timesheet-entry-detail',
  templateUrl: './timesheet-entry-detail.html',
})
export class TimesheetEntryDetail implements OnInit {

  timesheetEntry:TimesheetEntryModel={
    id: 2,
    taskId: 3,
    fromTime: "10:20",
    toTime: "11:20",
    timesheetId: 1,
    hours: 1,
    taskTitle: "Login User",
    taskType: 'Userstory',
    Description: 'Add Login component',
    projectId: 1,
    sprintId: 1,
    sprintTitle: 'Ekruhi sprint 1',
    projectTitle: 'EKrushi'
  };

  timesheetEntryId:number=11;

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

      this.projectSvc.getSprintTask(this.timesheetEntry.taskId).subscribe((task)=>{
       this.timesheetEntry.sprintId=task.sprintId;
       console.log(this.timesheetEntry);
      });

    })
  }

}
