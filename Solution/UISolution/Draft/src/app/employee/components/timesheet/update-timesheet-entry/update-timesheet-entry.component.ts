import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimesheetEntry } from '../../../../shared/models/timesheetEntry';
import { Project } from '../../../../shared/models/Project';
import { Task } from '../../../../shared/models/task';
import { TimesheetService } from '../../../../shared/services/Timesheet/timesheet.service';
import { ProjectService } from '../../../../shared/services/ProjectMgmt/project.service';
import { Sprint } from '../../../../shared/models/sprint';
import { LocalStorageKeys } from '../../../../shared/enums/local-storage-keys';
import { SprintService } from '../../../../shared/services/ProjectMgmt/sprint.service';
import { TasksManagementService } from '../../../../shared/services/TaskMgmt/tasks-management.service';

@Component({
  selector: 'app-update-timesheet-entry',
  templateUrl: './update-timesheet-entry.component.html',
  styleUrls: ['./update-timesheet-entry.component.css'],
})
export class UpdateTimesheetEntryComponent implements OnInit {
  projects: Project[] = [];
  selectedProjectId: number = 0;
  selectedSprintId: number = 0;
  employeeId: number = 0;
  tasks: Task[] = [];
  sprints: Sprint[] = [];


  @Input() timesheetEntry!: TimesheetEntry;


  constructor(
    private timesheetService: TimesheetService,
    private route: ActivatedRoute,
    private router: Router,
    private projectSvc: ProjectService
  ) {}

  get taskDescription() {
    return this.tasks
      .filter((task) => task.taskId == this.timesheetEntry.taskId)
      .map((task) => task.description)
      .at(0);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let timesheetDetailId = params.get('id');
      this.timesheetService
        .getTimesheetDetail(Number(timesheetDetailId))
        .subscribe((res) => {
          this.timesheetDetails = res;
          this.timesheetDetails.fromTime = this.timesheetDetails.fromTime.slice(0, 5);
          this.timesheetDetails.toTime = this.timesheetDetails.toTime.slice(0,5 );
          this.getDuration(this.timesheetDetails);
          this.selectedProjectId = this.timesheetDetails.projectId;
          this.selectedSprintId=this.timesheetDetails.sprintId;
          console.log(res)
         this.onSprintChange();

        });
    });

    this.employeeId = Number(localStorage.getItem(LocalStorageKeys.employeeId));
    this.projectSvc.getProjectsOfEmployee(this.employeeId).subscribe((res) => {
    this.projects = res;
    });
  }

  onSprintChange() {
    this.timesheetService
      .getOngoingSprints(
        this.selectedProjectId,
        new Date().toISOString().slice(0, 10)
      )
      .subscribe((res) => {
        console.log(res);
        this.sprints = res;
        this.getWorks();
      });
  }


  getWorks() {
    this.timesheetService
      .getEmployeeWorkBySprintAndStatus(
        this.selectedSprintId,
        this.employeeId,
        'inprogress'
      )
      .subscribe((res) => {
        this.tasks = res;
      });
  }

  onClick() {
    let timesheetDetails: TimeSheetDetails = {
      id: this.timesheetDetails.id,
      fromTime: this.timesheetDetails.fromTime + ':00',
      toTime: this.timesheetDetails.toTime + ':00',
      timesheetId: this.timesheetDetails.timesheetId,
      employeeWorkId: this.timesheetDetails.employeeWorkId,
    };

    this.timesheetService
      .updateTimeSheetDetails(timesheetDetails.id, timesheetDetails)
      .subscribe((res) => {
        if (res) {
        this.router.navigate(['../../details', this.timesheetDetails.timesheetId] ,{relativeTo:this.route});

        }
      });
  }

  onCancelClick() {
    console.log(this.timesheetDetails)
    this.router.navigate(['../../details', this.timesheetDetails.timesheetId] ,{relativeTo:this.route});

  }

  getDuration(timesheetEntry: TimeSheetDetailView) {
    this.timesheetService.getDurationOfWork(timesheetEntry);
  }

 
}
