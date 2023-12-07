import { Component, OnInit } from '@angular/core';
import { TimeSheetService } from '../../services/time-sheet.service';

@Component({
  selector: 'app-total-work-duration-of-employee',
  templateUrl: './total-work-duration-of-employee.component.html',
  styleUrls: ['./total-work-duration-of-employee.component.css']
})
export class TotalWorkDurationOfEmployeeComponent implements OnInit{

  employeeId:any;
  fromDate:string="";
  toDate:string="";
  workCategory:any ;

  constructor(private timesheetService:TimeSheetService){}
  ngOnInit(): void {
   
  }

  submit(employeeId:number,fromDate:string,toDate:string){
    console.log(employeeId);
    console.log(fromDate);
    console.log(toDate);
    this.timesheetService.getTotalDurationOfEmployee(this.employeeId,this.fromDate,this.toDate).subscribe((res)=>{
    console.log(res);
    this.workCategory=res;
   }) 
  }
}
