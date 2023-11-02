import { Component, OnInit } from '@angular/core';
import { Datefilter } from 'src/app/Models/datefilter';
import { Totalprojectwork } from 'src/app/Models/totalprojectwork';
import { BIserviceService } from 'src/app/Services/biservice.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-totalprojectworkhours',
  templateUrl: './totalprojectworkhours.component.html',
  styleUrls: ['./totalprojectworkhours.component.css']
})
export class TotalprojectworkhoursComponent implements OnInit {
totalProjectWork :Totalprojectwork[]=[]
teamManagerId:number=0
dateFilter:Datefilter={
  "startDate": "2020-08-01T17:34:03",
  "endDate": "2024-10-08T17:34:03"
}
selectedProjectId: number | null = null;
constructor(private biService:BIserviceService,
  private projectService:ProjectService,
  private employeeService:EmployeeService){}
ngOnInit(): void {
  let userId = localStorage.getItem('userId');
  this.employeeService.getEmployeeId(Number(userId)).subscribe((res) => {
    this.teamManagerId = res;
  this.biService.getTotalProjectWorkHours(this.teamManagerId,this.dateFilter).subscribe((res)=>{
    this.totalProjectWork=res
  })
  })
}

selectProject(id: number | null) {
  if (this.selectedProjectId === id) {
    this.selectedProjectId = null;
  } else {
    this.selectedProjectId = id;
  }
  this.projectService.setSelectedProjectId(id);
}
}
