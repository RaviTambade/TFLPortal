import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskModel } from 'src/app/employee/Models/ProjectMgmt/taskModel';
import { SprintService } from 'src/app/employee/Services/sprint.service';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';


@Component({
  selector: 'sprint-activity-list',
  templateUrl: './activitylist.html',
})
export class ActivityList implements OnInit{
  constructor(private router:ActivatedRoute,private sprintSvc:SprintService,private membershipSvc:MembershipService){}
  sprintId:number=10;
  empployeeWorks:TaskModel[]=[];
  ngOnInit(): void {
    
      this.sprintSvc.getSprintsTasks(this.sprintId).subscribe((res)=>{
        this.empployeeWorks=res;
        console.log(res);

        let assignedToIds:number[]=this.empployeeWorks.map(a=>a.assignedTo);
        let assignedByIds:number[]=this.empployeeWorks.map(a=>a.assignedBy);
        let employeeIds:number[]=[...assignedToIds,...assignedByIds]
        console.log(employeeIds);
         let employeeIdsString:string =employeeIds.join(",");
         this.membershipSvc.getUserDetails(employeeIdsString).subscribe(users=>{
          
          this.empployeeWorks.forEach(employee=>{
            let assignedTo=users.find(user=>user.id==employee.assignedTo);
            let assignedBy=users.find(user=>user.id==employee.assignedBy);
            if(assignedTo!=undefined && assignedBy!=undefined){
              employee.assignee=assignedTo.fullName;
              employee.assignor=assignedBy?.fullName;
            }
          })
         })

      })
  }

  // helper function to get idstring from an array
  getEmployeeIdStringFromArray(arr: any[], propertyNames: string[]):string {
    let ids = arr.flatMap((element) => propertyNames.map((property) => element[property]));
    let distinctids=  Array.from(new Set(ids)) //converted to set to remove duplicates;
    let idString=distinctids.join(',');
    console.log('🚀 ~ GetEmployeeIdFromArray ~ ids:', ids);
    console.log("🚀 ~ GetEmployeeIdFromArray ~ distinctids:", distinctids);
    console.log("🚀 ~ GetEmployeeIdFromArray ~ idString:", idString);
    return idString;
    // this.getEmployeeIdStringFromArray(this.empployeeWorks, ['assignedTo',"assignedBy"]);
  }

}


