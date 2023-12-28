import { Component, OnInit } from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { EmployeeWork } from '../../Models/EmployeeWork';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeeworksdetails',
  templateUrl: './employeeworksdetails.component.html',
  styleUrls: ['./employeeworksdetails.component.css']
})
export class EmployeeworksdetailsComponent implements  OnInit{
  assignedto:number|any;
  constructor(private workMgmtSvc :WorkmgmtService , private route: ActivatedRoute,){this.assignedto=localStorage.getItem(LocalStorageKeys.employeeId);}
  employeeworks:EmployeeWork|undefined;
 employeeworkid:number|any;
  ngOnInit(): void {
   
    this.route.paramMap.subscribe((param)=>{
      this.employeeworkid=param.get("id");
      this.workMgmtSvc.fetchEmployeeDetailsById(this.employeeworkid).subscribe((res)=>{
      this.employeeworks=res;
      console.log(res);
      })
    })
   }
}
