import { Component, OnInit } from '@angular/core';
import { SalaryDetails } from 'src/app/resource-management/Models/SalaryDetails';
import { PayrollService } from 'src/app/shared/services/payroll.service';

@Component({
  selector: 'employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit{

  constructor(private service:PayrollService){}
  salaries:SalaryDetails[]=[];
  month:number=0;
  year:number=0;

  ngOnInit(): void {
   
  }

  onClick(month:number,year:number){
    this.service.getAllPaidEmployees(month,year).subscribe((res)=>{
      this.salaries=res;
      console.log(res);
     })
  }
}
