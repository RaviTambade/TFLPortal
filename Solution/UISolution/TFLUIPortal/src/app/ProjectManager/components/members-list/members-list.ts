import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/ProjectMgmt/project.service';
import { ProjectEmployees } from '../../Model/ProjectEmployes';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';


@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.html',
})
export class MembersList implements OnInit{

  constructor(private projectAllocSvc:ProjectService,private membershipSvc:MembershipService){}
 
  projectId:number=4;
  employees:ProjectEmployees[]=[];
  ngOnInit(): void {

    this.projectAllocSvc.getAllProjectMembers(this.projectId).subscribe((res)=>{
        this.employees=res;
        console.log(this.employees);
        let employeeIds:number[] = this.employees.map(o => o.employeeId);
        let employeeIdString:string= employeeIds.join(",");
        console.log(employeeIdString);

        this.membershipSvc.getUserDetails(employeeIdString).subscribe((users)=>{
          console.log(users);
          this.employees.forEach(employee => {
            let foundUser = users.find(user => user.id === employee.employeeId);
            if (foundUser != undefined)
              employee.fullName = foundUser.fullName;
          });
        })

       }) 
  }

  
}
