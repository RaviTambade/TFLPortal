import { Component } from '@angular/core';
import { Project } from 'src/app/shared/Entities/Projectmgmt/Project';
import { Sprint } from 'src/app/shared/Entities/Projectmgmt/sprint';
import { Task } from 'src/app/shared/Entities/Projectmgmt/task';
import { TimesheetEntry } from 'src/app/shared/Entities/Timesheetmgmt/timesheetEntry';

import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { SprintService } from 'src/app/shared/services/ProjectMgmt/sprint.service';
import { TasksManagementService } from 'src/app/shared/services/TaskMgmt/tasks-management.service';
import { TimesheetService } from 'src/app/shared/services/Timesheet/timesheet.service';

@Component({
  selector: 'new-day-timesheet',
  templateUrl: './new-day-timesheet.html',
})
export class NewDayTimesheet {
  timesheetEntry: TimesheetEntry = {
    id: 0,
    taskId: 0,
    fromTime: '',
    toTime: '',
    timesheetId: 0,
    hours: 0,
  };

  projects: Project[] = [];
  employeeId: number = 0;
  selectedProjectId: number = 0;
  selectedSprintId: number = 0;
  taskTypes:string[]=["userstory","task","bug","issues","meeting","learning","mentoring","others"]
  selectedTasktype: string = this.taskTypes[0];
  tasks: Task[] = [];
  timesheetId: number | undefined;
  sprint!: Sprint;

  get taskDescription() {
    return this.tasks
      .filter((task) => task.id == this.timesheetEntry.taskId)
      .map((task) => task.description)
      .at(0);
  }
  constructor(
    private timesheetService: TimesheetService,
    private projectService: ProjectService,
    private tasksService: TasksManagementService,
    private SprintSvc:SprintService
  ) {}

  ngOnInit(): void {
    this.timesheetId = 10;
    this.employeeId = 10;

    this.projectService.getProjects(this.employeeId).subscribe((res) => {
      this.projects = res;
      if (this.projects.length > 0 && this.selectedProjectId == 0) {
        this.selectedProjectId = this.projects[0].id;
        this.onSprintChange();
      }
    });
  }

  onSprintChange() {
    this.SprintSvc
      .getCurrentSprint(this.selectedProjectId, '2024-01-12')
      .subscribe((res) => {
        console.log(res);
        this.sprint = res;
        this.selectedSprintId = this.sprint.id;
        this.getTasks();
      });
  }

  getTasks() {
    this.tasksService
      .getAllTasksOfSprint(
        this.selectedSprintId,
        this.employeeId,
        'inprogress',
        this.selectedTasktype
      )
      .subscribe((res) => {
        this.tasks = res;
        console.log("🚀 ~ .subscribe ~ tasks:", this.tasks);
        if (this.tasks.length > 0)
          this.timesheetEntry.taskId = this.tasks[0].id;
      });
  }

  onClickAdd() {
    if (this.timesheetId == undefined) {
      return;
    }
    let timesheetEntry: TimesheetEntry = {
      id: 0,
      fromTime: this.timesheetEntry.fromTime + ':00',
      toTime: this.timesheetEntry.toTime + ':00',
      timesheetId: this.timesheetId,
      taskId: this.timesheetEntry.taskId,
      hours: 0,
    };

    this.timesheetService.addTimeSheetEntry(timesheetEntry).subscribe((res) => {
      if (res) {
        alert('entry added');
      }
    });
  }

  onClickCancel() {}

  getDuration() {
    this.timesheetEntry.hours = this.timesheetService.getTimeDifference(
      this.timesheetEntry.fromTime,
      this.timesheetEntry.toTime
    );
  }
}
