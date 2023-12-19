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
import { TimeSheetDetails } from 'src/app/time-sheet/models/TimeSheetDetails';

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

  @Input() timesheetDetails!: TimeSheetDetails;
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
      let timeSheetEntryId = params.get('id');
      this.date = params.get('date') || '';
      this.workmgmtSvc
        .getTmeSheetEntry(Number(timeSheetEntryId))
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

  // ngOnChanges(changes: SimpleChanges) {
  //   this.timesheetDetails = changes['timesheetDetails'].currentValue;
  //   console.log("🚀 ~ ngOnChanges ~ timesheetDetails:", this.timesheetDetails);
  //   this.timesheetDetails.fromTime = this.timesheetDetails.fromTime.slice(0,5);
  //   this.timesheetDetails.toTime = this.timesheetDetails.toTime.slice(0,5);
  // }

  onClick() {
    let timesheetDetails: TimeSheetDetails = {
      id: this.timesheetDetails.id,
      fromTime: this.timesheetDetails.fromTime + ':00',
      toTime: this.timesheetDetails.toTime + ':00',
      durationInMinutes: this.timesheetDetails.durationInMinutes,
      durationInHours: this.timesheetDetails.durationInHours,
      timeSheetId: this.timesheetDetails.timeSheetId,
      work: this.timesheetDetails.work,
      workCategory: this.timesheetDetails.workCategory,
      description: this.timesheetDetails.description,
      projectId: this.timesheetDetails.projectId,
      projectName: this.timesheetDetails.projectName,
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

  getDuration(timeSheetEnrty: TimeSheetDetails) {
    this.workmgmtSvc.getDurationOfWork(timeSheetEnrty);
  }
}
