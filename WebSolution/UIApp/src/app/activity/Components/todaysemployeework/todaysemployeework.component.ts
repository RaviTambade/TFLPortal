import { Component } from '@angular/core';
import { Project } from 'src/app/projects/Models/project';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/project.service';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { EmployeeWork } from '../../Models/EmployeeWork';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todaysemployeework',
  templateUrl: './todaysemployeework.component.html',
  styleUrls: ['./todaysemployeework.component.css']
})
export class TodaysemployeeworkComponent {
  employeeId:number|any;
  isClick:boolean=false;
  activityDetails:boolean=false;
  constructor(private projectSvc:ProjectService,private workMgmt:WorkmgmtService,private route:ActivatedRoute,private router:Router){
    this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId)
  }
  projects:Project[]=[];
  projectId:number|any;
  date= new Date().toISOString().slice(0,10);
  employeeWorks:EmployeeWork[]=[];
  activityId:number=0;
  //@Output() activityupdate=new EventEmitter<EmployeeWork>();
  ngOnInit(): void {

    this.route.paramMap.subscribe((param)=>{
     this.projectId=param.get('id');
     this.workMgmt.fetchTodaysEmployeeWork(this.projectId,this.date).subscribe((res)=>{
      this.employeeWorks=res;
      console.log(this.employeeWorks)
     })
    })
  
  
  }

  onClick(){
    this.router.navigate(['/projects/update',this.projectId]);
  }

}
