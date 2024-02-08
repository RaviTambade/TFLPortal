import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/shared/Entities/Projectmgmt/Project';
import { Sprint } from 'src/app/shared/Entities/sprint';
import { Task } from 'src/app/shared/Entities/task';
import { TimesheetEntry } from 'src/app/shared/Entities/timesheetEntry';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { TasksManagementService } from 'src/app/shared/services/TaskMgmt/tasks-management.service';
import { TimesheetService } from 'src/app/shared/services/Timesheet/timesheet.service';



@Component({
  selector: 'app-add-timesheet-entry',
  templateUrl: './add-timesheet-entry.component.html',
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
      .filter((task) => task.id == this.timesheetEntry.taskId)
      .map((task) => task.description)
      .at(0);
  }
  constructor(
    private timesheetService: TimesheetService,
    private projectService: ProjectService,
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
      .getProjects(this.employeeId)
      .subscribe((res) => {
        this.projects = res;
        if (this.projects.length > 0 && this.selectedProjectId== 0) {
          this.selectedProjectId = this.projects[0].id;

          this.onSprintChange();
        }
      });
  }

  onSprintChange() {
    this.projectService
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
