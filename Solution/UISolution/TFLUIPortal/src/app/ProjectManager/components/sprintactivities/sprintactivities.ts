import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { TaskModel } from 'src/app/shared/Models/Projectmgmt/taskModel';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'app-sprintactivities',
  templateUrl: './sprintactivities.html',
})
export class Sprintactivities implements OnInit{
  constructor(private router:ActivatedRoute,private sprintSvc:ProjectService,private membershipSvc:MembershipService){}
  sprintId:number=10;
  empployeeWorks:TaskModel[]=[];
  ngOnInit(): void {
    
      this.sprintSvc.getSprintsTasks(this.sprintId).subscribe((res)=>{
        this.empployeeWorks=res;

        let employeeIds:number[]=this.empployeeWorks.map(a=>a.assignedTo);
         let employeeIdsString:string =employeeIds.join(",");
         console.log(employeeIdsString)
         this.membershipSvc.getUserDetails(employeeIdsString).subscribe(users=>{
          
          this.empployeeWorks.forEach(employee=>{
            let foundUser=users.find(user=>user.id==employee.assignedTo);
            if(foundUser!=undefined){
              employee.assignee=foundUser.fullName;
              
            }
           
          })
         })

      })
  }

}
