import { Component, OnInit } from '@angular/core';
import { Salary } from 'src/app/resource-management/Models/Salary';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { HrService } from 'src/app/shared/services/hr.service';

@Component({
  selector: 'app-salary-history',
  templateUrl: './salary-history.component.html',
  styleUrls: ['./salary-history.component.css']
})
export class SalaryHistoryComponent implements OnInit{

  employeeId:number=0;
  salaries:Salary[]=[];
  constructor(private service:HrService){
   this.employeeId=Number(localStorage.getItem(LocalStorageKeys.employeeId));
  }
  ngOnInit(): void {
    this.service.getSalaryHistory(this.employeeId).subscribe((res)=>{
    this.salaries=res;
    })
  }
}
