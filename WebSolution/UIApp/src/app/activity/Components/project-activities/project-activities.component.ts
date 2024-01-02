import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../Services/activity.service';
import { Project } from 'src/app/projects/Models/project';
import { ProjectService } from 'src/app/shared/services/project.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { JwtService } from 'src/app/shared/services/jwt.service';
import { TokenClaims } from 'src/app/shared/enums/tokenclaims';
import { EmployeeWork } from '../../Models/EmployeeWork';

@Component({
  selector: 'project-activities',
  templateUrl: './project-activities.component.html',
  styleUrls: ['./project-activities.component.css'],
})
export class ProjectActivitiesComponent implements OnInit {
  projects: Project[] = [];
  activities: EmployeeWork[] = [];
  projectId: number = 0;
  employeeId:number|any;
  visibleActivities: EmployeeWork[]=[];
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

      
      this.role = this.jwtSvc.getClaimFromToken(TokenClaims.role);
      console.log(this.role);
      if(this.role=='Director'){
        this.populateActivities(this.projectId);
      }
      else if(this.role=='Employee'){
        
        this.workMgmtSvc.getAllEmployeeWorkOfEmployee(this.projectId,this.employeeId).subscribe((res)=>{
          console.log(this.employeeId);
          console.log(this.projectId);
          this.activities=res;
          this.filterActivities();
        })
      }
    });
  }

  onChangeProject(e: any) {
    this.projectId = e.target.value;
    this.populateActivities(this.projectId);
  }

  populateActivities(projectId: number) {
    this.workMgmtSvc.fetchEmployeeWorkByProject(projectId).subscribe((res) => {
      this.activities = res;
      this.filterActivities();
    });
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
