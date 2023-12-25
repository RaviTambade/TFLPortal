import { Component } from '@angular/core';
import { Project } from 'src/app/projects/Models/project';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { TokenClaims } from 'src/app/shared/Enums/tokenclaims';
import { JwtService } from 'src/app/shared/services/jwt.service';
import { ProjectService } from 'src/app/shared/services/project.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { Activity } from '../../Models/Activity';

@Component({
  selector: 'app-employee-all-activities',
  templateUrl: './employee-all-activities.component.html',
  styleUrls: ['./employee-all-activities.component.css']
})
export class EmployeeAllActivitiesComponent {

  projects: Project[] = [];
  activities: Activity[] = [];
  projectId: number = 0;
  employeeId:number|any;
  visibleActivities: Activity[]=[];
role:string|undefined=undefined;
  checkStatusTodo: boolean = true;
  checkStatusInProgress: boolean = true;
  checkStatusCompleted: boolean = true;
  constructor(private projectSvc: ProjectService,private workMgmtSvc:WorkmgmtService,private jwtSvc:JwtService) {
    this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId);
  }

  ngOnInit(): void {
    this.projectSvc.fetchAllProject().subscribe((res) => {
      this.projects = res;
      this.projectId = this.projects[0].id;
      this.onChangeProject();
       this.role = this.jwtSvc.getClaimFromToken(TokenClaims.role);
      console.log(this.role);
      
    });
  }

  onChangeProject() {
    this.workMgmtSvc.getAllActivitiesOfEmployee(this.projectId,this.employeeId).subscribe((res)=>{
      console.log(this.employeeId);
      console.log(this.projectId);
      this.activities=res;
      this.filterActivities();
    })
  }



  filterActivities(): void {
   
    if(this.checkStatusTodo && this.checkStatusInProgress && this.checkStatusCompleted){
      this.visibleActivities = this.activities;
    }

    else if(this.checkStatusTodo && this.checkStatusInProgress){
      this.visibleActivities = this.activities.filter(item => item.status === 'todo' || item.status==='inprogress');
    }
    else if(this.checkStatusTodo && this.checkStatusCompleted){
      this.visibleActivities = this.activities.filter(item => item.status === 'todo' || item.status==='completed');
    }

    else if(this.checkStatusInProgress && this.checkStatusCompleted){
      this.visibleActivities = this.activities.filter(item => item.status === 'inprogress' || item.status==='completed');
    }

    else if(this.checkStatusTodo){
      this.visibleActivities = this.activities.filter(item => item.status === 'todo');
    }
    else if(this.checkStatusInProgress){
      this.visibleActivities = this.activities.filter(item => item.status === 'inprogress');
    }
    else if(this.checkStatusCompleted){
      this.visibleActivities = this.activities.filter(item => item.status === 'completed');
    }

    else{
      this.visibleActivities=[];
    }
  }
  
}
