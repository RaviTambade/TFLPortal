import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenClaims } from 'src/app/Models/Enums/tokenClaims';
import { NameId } from 'src/app/Models/name-id';
import { AuthenticationService } from 'src/app/Services/authentication.service';
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
   private userService:UserService,
   private authservice:AuthenticationService
  ) {
  }
  ngOnInit(): void {
    let userId = this.authservice.getClaimFromToken(TokenClaims.userId);
    this.employeeService.getEmployeeId(userId).subscribe((res) => {
      this.teamManagerId = res;
this.employeeService.getUserIdByManagerId(this.teamManagerId).subscribe((res)=>{
  let employeeUserIds=res
  let employeeUserIdsString=employeeUserIds.join(",")
  this.userService.getUserNamesWithId(employeeUserIdsString).subscribe((res)=>{
     this.teamMembers=res
     this.teamMember=this.teamMembers.map(res=>res.fullName)

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
