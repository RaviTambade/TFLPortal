import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimesheetService } from '../../../../shared/services/Timesheet/timesheet.service';
import { ProjectService } from '../../../../shared/services/ProjectMgmt/project.service';
import { LocalStorageKeys } from '../../../../shared/enums/local-storage-keys';
import { TasksManagementService } from '../../../../shared/services/TaskMgmt/tasks-management.service';
import { Project } from 'src/app/Entities/Project';
import { Task } from 'src/app/Entities/task';
import { Sprint } from 'src/app/Entities/sprint';
import { TimesheetEntry } from 'src/app/Entities/timesheetEntry';

@Component({
  selector: 'app-update-timesheet-entry',
  templateUrl: './update-timesheet-entry.component.html',
})
export class UpdateTimesheetEntryComponent implements OnInit {
  projects: Project[] = [];
  selectedProjectId: number = 0;
  selectedSprintId: number = 0;
  employeeId: number = 0;
  tasks: Task[] = [];
  sprint!: Sprint ;


  @Input() timesheetEntry!: TimesheetEntry;


  constructor(
    private timesheetService: TimesheetService,
    private route: ActivatedRoute,
    private taskService:TasksManagementService,
    private router: Router,
    private projectSvc: ProjectService
  ) {}

  get taskDescription() {
    return this.tasks
      .filter((task) => task.id == this.timesheetEntry.taskId)
      .map((task) => task.description)
      .at(0);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let timesheetEntryId =15
      //  params.get('id');
      this.timesheetService
        .getTimesheetEntry(Number(timesheetEntryId))
        .subscribe((res) => {
          this.timesheetEntry = res;
          this.timesheetEntry.fromTime = this.timesheetEntry.fromTime.slice(0, 5);
          this.timesheetEntry.toTime = this.timesheetEntry.toTime.slice(0,5 );
          this.getDuration();
          // this.selectedProjectId = this.timesheetEntry.projectId;
          // this.selectedSprintId=this.timesheetEntry.sprintId;
          console.log(res)
         this.onSprintChange();

        });
    });

    this.employeeId = Number(localStorage.getItem(LocalStorageKeys.employeeId));
    this.projectSvc.getProjects(this.employeeId).subscribe((res) => {
    this.projects = res;
    });
  }

  onSprintChange() {
    this.projectSvc
      .getCurrentSprint(
        this.selectedProjectId,
        new Date().toISOString().slice(0, 10)
      )
      .subscribe((res) => {
        console.log(res);
        this.sprint = res;
        this.getTasks();
      });
  }


  getTasks() {
    this.taskService
      .getAllTasksOfSprintAndMember(
        this.selectedSprintId,
        this.employeeId,
        'inprogress'
      )
      .subscribe((res) => {
        this.tasks = res;
      });
  }

  onClick() {
    let timesheetEntry: TimesheetEntry = {
      id: this.timesheetEntry.id,
      fromTime: this.timesheetEntry.fromTime + ':00',
      toTime: this.timesheetEntry.toTime + ':00',
      timesheetId: this.timesheetEntry.timesheetId,
      taskId: this.timesheetEntry.taskId,
      durationInHours: 0
    };

    this.timesheetService
      .updateTimeSheetEntry(timesheetEntry.id, timesheetEntry)
      .subscribe((res) => {
        if (res) {
        this.router.navigate(['../../details', this.timesheetEntry.timesheetId] ,{relativeTo:this.route});

        }
      });
  }

  onCancelClick() {
    console.log(this.timesheetEntry)
    this.router.navigate(['../../details', this.timesheetEntry.timesheetId] ,{relativeTo:this.route});

  }

  getDuration() {
    this.timesheetEntry.durationInHours = this.timesheetService.getTimeDifference(this.timesheetEntry.fromTime,this.timesheetEntry.toTime);
  }

 
}
