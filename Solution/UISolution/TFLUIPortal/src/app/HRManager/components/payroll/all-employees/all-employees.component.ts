import { Component, OnInit } from '@angular/core';
import { Salary } from 'src/app/Entities/Salary';
import { PayrollService } from 'src/app/shared/services/Payroll/payroll.service';


@Component({
  selector: 'employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit{

  constructor(private service:PayrollService){}
  salaries:Salary[]=[];
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
