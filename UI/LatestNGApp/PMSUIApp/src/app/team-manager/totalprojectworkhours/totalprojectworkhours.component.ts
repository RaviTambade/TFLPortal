import { Component, OnInit } from '@angular/core';
import { Totalprojectwork } from 'src/app/Models/totalprojectwork';
import { BIserviceService } from 'src/app/Services/biservice.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-totalprojectworkhours',
  templateUrl: './totalprojectworkhours.component.html',
  styleUrls: ['./totalprojectworkhours.component.css']
})
export class TotalprojectworkhoursComponent implements OnInit {
totalProjectWork :Totalprojectwork[]=[]
teamManagerId:number=0
constructor(private biService:BIserviceService,
  private employeeService:EmployeeService){}
ngOnInit(): void {
  let userId = localStorage.getItem('userId');
  this.employeeService.getEmployeeId(Number(userId)).subscribe((res) => {
    this.teamManagerId = res;
  this.biService.getTotalProjectWorkHours(this.teamManagerId).subscribe((res)=>{
    this.totalProjectWork=res
    console.log(res)
  })
  })
}

}
