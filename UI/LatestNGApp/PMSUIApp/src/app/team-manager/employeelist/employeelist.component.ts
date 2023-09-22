import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NameId } from 'src/app/Models/name-id';
import { EmployeeService } from 'src/app/Services/employee.service';
import { UserService } from 'src/app/Services/user.service';
import { EmployeeprojectsComponent } from 'src/app/team-member/employeeprojects/employeeprojects.component';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  teamManagerId:number=0
  teamMembers:NameId[]=[]
  teamMember:string[]=[]
  constructor(
    private router: Router,
   private employeeService:EmployeeService,
   private userService:UserService
  ) {
  }
  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    this.employeeService.getEmployeeId(Number(userId)).subscribe((res) => {
      this.teamManagerId = res;
this.employeeService.getUserIdByManagerId(this.teamManagerId).subscribe((res)=>{
  let employeeUserIds=res
  let employeeUserIdsString=employeeUserIds.join(",")
  this.userService.getUserNamesWithId(employeeUserIdsString).subscribe((res)=>{
     this.teamMembers=res
     this.teamMember=this.teamMembers.map(res=>res.name)

  })
   })
  })
  }
  addEmployee() {
    this.router.navigate(['teammanager/addemployee']);
}
onTeamMemberClick(employeeId:number){

  this.router.navigate(['teammember/employeedetails',employeeId]);

}
}
