import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TimesheetService } from '../../../../shared/services/Timesheet/timesheet.service';
import { ProjectService } from '../../../../shared/services/ProjectMgmt/project.service';
import { LocalStorageKeys } from '../../../../shared/enums/local-storage-keys';
import { SprintService } from '../../../../shared/services/ProjectMgmt/sprint.service';
import { TasksManagementService } from '../../../../shared/services/TaskMgmt/tasks-management.service';
import { TimesheetEntry } from 'src/app/Entities/timesheetEntry';
import { Sprint } from 'src/app/Entities/sprint';
import { Task } from 'src/app/Entities/task';
import { Project } from 'src/app/Entities/Project';

@Component({
  selector: 'app-add-timesheet-entry',
  templateUrl: './add-timesheet-entry.component.html',
  styleUrls: ['./add-timesheet-entry.component.css'],
})
export class AddTimesheetEntryComponent {
  timesheetEntry: TimesheetEntry = {
    id: 0,
    taskId: 0,
    fromTime: '',
    toTime: '',
    timesheetId: 0,
    durationInHours: 0,
  };

  projects: Project[] = [];
  employeeId: number = 0;
  selectedProjectId: number = 0;
  selectedSprintId: number = 0;
  tasks: Task[] = [];
  timesheetId: number | undefined;
  sprint!: Sprint;


  get taskDescription() {
    return this.tasks
      .filter((task) => task.taskId == this.timesheetEntry.taskId)
      .map((task) => task.description)
      .at(0);
  }
  constructor(
    private timesheetService: TimesheetService,
    private projectService: ProjectService,
    private sprintService: SprintService,
    private tasksService:TasksManagementService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
      this.timesheetId =10
      //  Number(params.get('id'));
    // });
    this.employeeId =10
    //  Number(localStorage.getItem(LocalStorageKeys.employeeId));
    this.projectService
      .getProjectsOfMembers(this.employeeId)
      .subscribe((res) => {
        this.projects = res;
        if (this.projects.length > 0 && this.selectedProjectId== 0) {
          this.selectedProjectId = this.projects[0].projectId;

          this.onSprintChange();
        }
      });
  }

  onSprintChange() {
    this.sprintService
      .getCurrentSprint(
        this.selectedProjectId,
        new Date().toISOString().slice(0, 10)
      )
      .subscribe((res) => {
        console.log(res);
        this.sprint = res;
        this.selectedSprintId = this.sprint.id;
        this.getTasks();
      });
  }

  getTasks() {
    this.tasksService
      .getAllTasksOfSprintAndMember(
        this.selectedSprintId,
        this.employeeId,
        'inprogress'
      )
      .subscribe((res) => {
        this.tasks = res;
        if (this.tasks.length > 0)
          this.timesheetEntry.taskId = this.tasks[0].taskId;
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
      durationInHours: 0
    };

    this.timesheetService
      .addTimeSheetEntry(timesheetEntry)
      .subscribe((res) => {
        if (res) {
          this.router.navigate(['../../details', this.timesheetId], {
            relativeTo: this.route,
          });
        }
      });
  }

  onClickCancel() {
    this.router.navigate(['../../details', this.timesheetId], {
      relativeTo: this.route,
    });
  }

  getDuration() {
    this.timesheetEntry.durationInHours = this.timesheetService.getTimeDifference(this.timesheetEntry.fromTime,this.timesheetEntry.toTime);
  }
}
