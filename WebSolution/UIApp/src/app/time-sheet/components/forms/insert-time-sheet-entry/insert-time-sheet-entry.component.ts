import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/projects/Models/project';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/project.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { TimeSheetDetailView } from 'src/app/time-sheet/models/timesheet-detail-view';
import { TimeSheetDetails } from 'src/app/time-sheet/models/timesheetdetails';

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
    timesheetId: 0,
    employeeWorkId: 0
  };

  projects: Project[] = [];
  selectedProjectId:number=0;

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
        });
    }
  }

  onClick() {
    let timeSheetDetail: TimeSheetDetails = {
      id: 0,
      fromTime: this.timeSheetDetail.fromTime + ':00',
      toTime: this.timeSheetDetail.toTime + ':00',
      timesheetId: this.timesheetId,
      employeeWorkId:0
    };

    this.workmgmtSvc.addTimeSheetDetails(timeSheetDetail).subscribe((res) => {
      if (res) {
        this.stateChangeEvent.emit(true);
      }
    });
  }

  getDuration(timeSheetDetail: TimeSheetDetailView) {
    this.timeSheetDetail = this.workmgmtSvc.getDurationOfWork(timeSheetDetail);
  }
}
