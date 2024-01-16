import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
import { Project } from 'src/app/projects/Models/project';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/project.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { Sprint } from 'src/app/time-sheet/models/sprint';
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
  selectedSprintId: number = 0;
  employeeId: number = 0;
  employeeWorks: EmployeeWork[] = [];
  sprints: Sprint[] = [];


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

  get workDescription(){
    return this.employeeWorks.filter((work)=> work.id==this.timesheetDetails.employeeWorkId)
                       .map((work)=> work.description).at(0);
   }

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



    console.log(this.router.url)
    this.currentUrl=this.router.url;
  }

  onSprintChange() {
    this.workmgmtSvc
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
    this.workmgmtSvc
      .getEmployeeWorkBySprintAndStatus(
        this.selectedSprintId,
        this.employeeId,
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
