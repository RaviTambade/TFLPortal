import { Component, OnInit } from '@angular/core';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { EmployeeWork } from '../../Models/EmployeeWork';

@Component({
  selector: 'app-employeeworks',
  templateUrl: './employeeworks.component.html',
  styleUrls: ['./employeeworks.component.css']
})
export class EmployeeworksComponent implements OnInit{

  assignedto:number|any;
  constructor(private workMgmtSvc :WorkmgmtService){this.assignedto=localStorage.getItem(LocalStorageKeys.employeeId);}
  employeeworks:EmployeeWork[]=[];

  ngOnInit(): void {
    this.workMgmtSvc.fetchAllEmployeeWorkOfEmployee(this.assignedto).subscribe((res)=>{
    this.employeeworks=res;
    console.log(res);
    // this.selectedActivities.emit(this.activities[0]);
    // console.log("hii"+this.selectedActivities);
    })
   }

}
