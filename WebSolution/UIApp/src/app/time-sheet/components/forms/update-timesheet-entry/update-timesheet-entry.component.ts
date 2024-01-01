import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
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
  projects: Project[] = [];
  selectedProjectId: number = 0;
  employeeId: number = 0;
  employeeWorks: EmployeeWork[] = [];

  @Input() timesheetDetails!: TimeSheetDetailView;
  @Output() stateChangeEvent = new EventEmitter<boolean>();

  date: string = '';
  currentUrl:string=''

  constructor(
    private workmgmtSvc: WorkmgmtService,
    private route: ActivatedRoute,
    private router: Router,
    private projectSvc: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let timesheetDetailId = params.get('id');
      this.date = params.get('date') || '';
      this.workmgmtSvc
        .getTimesheetDetail(Number(timesheetDetailId))
        .subscribe((res) => {
          this.timesheetDetails = res;
          this.timesheetDetails.fromTime = this.timesheetDetails.fromTime.slice(0, 5);
          this.timesheetDetails.toTime = this.timesheetDetails.toTime.slice(0,5 );
          this.getDuration(this.timesheetDetails);
        });
    });

    this.employeeId = Number(localStorage.getItem(LocalStorageKeys.employeeId));
    this.projectSvc.getProjectsOfEmployee(this.employeeId).subscribe((res) => {
      this.projects = res;
      if (this.projects.length > 0) {
        this.selectedProjectId = this.projects[0].id;
        this.getWorks();
      }
    });
    console.log(this.router.url)
    this.currentUrl=this.router.url;
  }

  getWorks() {
    this.workmgmtSvc
      .getEmployeeWorkByProjectAndStatus(
        this.employeeId,
        this.selectedProjectId,
        'inprogress'
      )
      .subscribe((res) => {
        this.employeeWorks = res;
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

    this.workmgmtSvc
      .updateTimeSheetDetails(timesheetDetails.id, timesheetDetails)
      .subscribe((res) => {
        if (res) {
          this.stateChangeEvent.emit(true);

        this.navigateToUrl();

        }
      });
  }

  onCancelClick() {
    console.log(this.timesheetDetails)

    this.navigateToUrl();

  }

  getDuration(timeSheetEnrty: TimeSheetDetailView) {
    this.workmgmtSvc.getDurationOfWork(timeSheetEnrty);
  }

  navigateToUrl(){
     if(this.currentUrl.includes('/timesheet/view')){
      this.router.navigate(['../../view/add', this.date],{relativeTo:this.route});
    }
    else if(this.currentUrl.includes('/timesheet')){

      this.router.navigate(['../../details', this.timesheetDetails.timesheetId] ,{relativeTo:this.route});
    }
 
  }
}
