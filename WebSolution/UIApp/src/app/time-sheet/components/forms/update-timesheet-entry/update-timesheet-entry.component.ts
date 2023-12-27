import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/projects/Models/project';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/project.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { TimeSheetDetailView } from 'src/app/time-sheet/models/timesheet-detail-view';
import { TimeSheetDetails } from 'src/app/time-sheet/models/timesheetdetails';

@Component({
  selector: 'app-update-timesheet-entry',
  templateUrl: './update-timesheet-entry.component.html',
  styleUrls: ['./update-timesheet-entry.component.css'],
})
export class UpdateTimesheetEntryComponent implements OnInit {
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

  @Input() timesheetDetails!: TimeSheetDetailView;
  @Output() stateChangeEvent = new EventEmitter<boolean>();

  date: string = '';
  projects: Project[] = [];

  constructor(
    private workmgmtSvc: WorkmgmtService,
    private route: ActivatedRoute,
    private router: Router,
    private projectSvc:ProjectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let timesheetDetailId = params.get('id');
      this.date = params.get('date') || '';
      this.workmgmtSvc
        .getTimesheetDetail(Number(timesheetDetailId))
        .subscribe((res) => {
          this.timesheetDetails = res;
          this.timesheetDetails.fromTime = this.timesheetDetails.fromTime.slice(0,5);
          this.timesheetDetails.toTime = this.timesheetDetails.toTime.slice(0,5);
          this.getDuration(this.timesheetDetails);
        });
    });

    let employeeId = localStorage.getItem(LocalStorageKeys.employeeId);
    if (employeeId != null) {
      this.projectSvc .getProjectsOfEmployee(Number(employeeId)) .subscribe((res) => {
          this.projects = res;
        });
    }
  }



  onClick() {
    let timesheetDetails: TimeSheetDetails = {
      id: this.timesheetDetails.id,
      fromTime: this.timesheetDetails.fromTime + ':00',
      toTime: this.timesheetDetails.toTime + ':00',
      timesheetId: this.timesheetDetails.timesheetId,
      employeeWorkId: this.timesheetDetails.employeeWorkId
    };

    this.workmgmtSvc
      .updateTimeSheetDetails(timesheetDetails.id, timesheetDetails)
      .subscribe((res) => {
        if (res) {
          this.stateChangeEvent.emit(true);
          this.router.navigate(['/timesheet/view/add', this.date]);
        }
      });
  }

  onCancelClick() {
    this.router.navigate(['/timesheet/view/add', this.date]);
  }

  getDuration(timeSheetEnrty: TimeSheetDetailView) {
    this.workmgmtSvc.getDurationOfWork(timeSheetEnrty);
  }
}
