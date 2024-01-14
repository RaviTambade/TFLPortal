import { Component, OnInit } from '@angular/core';
import { PayrollService } from 'src/app/shared/services/payroll.service';

@Component({
  selector: 'employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit{

  constructor(private service:PayrollService){}
  salaries:any[]=[];
  month:number=1;
  year:number=2024;

  ngOnInit(): void {
    this.service.getAllEmployee(this.month,this.year).subscribe((res)=>{
     this.salaries=res;
     console.log(res);
    })
  }
}
