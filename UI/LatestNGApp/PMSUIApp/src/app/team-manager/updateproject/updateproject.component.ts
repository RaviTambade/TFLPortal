import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenClaims } from 'src/app/Models/Enums/tokenClaims';
import { Addproject } from 'src/app/Models/addproject';
import { Project } from 'src/app/Models/project';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent implements OnInit {
  projectId:number=0
  teamManagerId:number=0

projectdetail:Project={
  id: 0,
  title: '',
  startDate: '',
  endDate: 0,
  description: '',
  status: '',
  teamManagerUserId: 0
}
constructor(private projectService:ProjectService,
  private route:ActivatedRoute,
  private employeeService:EmployeeService,
  private authservice:AuthenticationService){}
  ngOnInit(): void {
   this.route.params.subscribe(params=>{
this.projectId= params['projectId'];
let userId = this.authservice.getClaimFromToken(TokenClaims.userId);
this.employeeService.getEmployeeId(userId).subscribe((res) => {
  this.teamManagerId = res;
  
this.projectService.getProjectDetails(this.projectId).subscribe((res)=>{
  this.projectdetail=res
})
   })
  })
}

OnSubmit(){
  this.projectService.updateProject(this.projectdetail).subscribe((res)=>{
   
  })
}
}

