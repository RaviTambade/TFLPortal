import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/projects/Models/project';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/project.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { TimeSheetDetails } from 'src/app/time-sheet/models/TimeSheetDetails';

@Component({
  selector: 'app-insert-time-sheet-entry',
  templateUrl: './insert-time-sheet-entry.component.html',
  styleUrls: ['./insert-time-sheet-entry.component.css'],
})
export class InsertTimeSheetEntryComponent implements OnInit {
  activitiyTypes: string[] = [
    'task',
    'userstory',
    'bug',
    'issues',
    'meeting',
    'learning',
    'mentoring',
    'break',
    'clientcall',
    'other',
  ];

  timeSheetDetail: TimeSheetDetails = {
    id: 0,
    fromTime: '',
    toTime: '',
    durationInMinutes: 0,
    durationInHours: '',
    timesheetId: 0,
    work: '',
    workCategory: '',
    description: '',
    projectId: 0,
    projectName: '',
  };

  projects: Project[] = [];
  @Input() timesheetId!: number;
  @Output() stateChangeEvent = new EventEmitter<boolean>();
  constructor(
    private workmgmtSvc: WorkmgmtService,
    private projectSvc: ProjectService
  ) {}

  ngOnInit(): void {
    let employeeId = localStorage.getItem(LocalStorageKeys.employeeId);
    if (employeeId != null) {
      this.projectSvc .getProjectsOfEmployee(Number(employeeId)) .subscribe((res) => {
          this.projects = res;
          this.timeSheetDetail.projectId=this.projects[0].id;
          this.timeSheetDetail.projectName=this.projects[0].title;
          this.timeSheetDetail.workCategory=this.activitiyTypes[0];
        });
    }
  }

  onClick() {
    let timeSheetDetail: TimeSheetDetails = {
      id: 0,
      fromTime: this.timeSheetDetail.fromTime + ':00',
      toTime: this.timeSheetDetail.toTime + ':00',
      durationInMinutes: this.timeSheetDetail.durationInMinutes,
      durationInHours: this.timeSheetDetail.durationInHours,
      timesheetId: this.timesheetId,
      work: this.timeSheetDetail.work,
      workCategory: this.timeSheetDetail.workCategory,
      description: this.timeSheetDetail.description,
      projectId: this.timeSheetDetail.projectId,
      projectName: this.timeSheetDetail.projectName,
    };

    this.workmgmtSvc.addTimeSheetDetails(timeSheetDetail).subscribe((res) => {
      if (res) {
        this.stateChangeEvent.emit(true);
      }
    });
  }

  getDuration(timeSheetDetail: TimeSheetDetails) {
    this.timeSheetDetail = this.workmgmtSvc.getDurationOfWork(timeSheetDetail);
  }
}
