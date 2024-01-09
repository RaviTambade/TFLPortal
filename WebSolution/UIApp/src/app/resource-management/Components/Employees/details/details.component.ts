import { Component } from '@angular/core';
import { HrService } from 'src/app/shared/services/hr.service';

@Component({
  selector: 'employee-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor(private svc:HrService){}

  employee:any | undefined;
  employeeId:number=1;
  status:boolean= false;
  
  ngOnInit(): void {
    this.svc.getEmployeeDetails(this.employeeId).subscribe((res)=>{
    this.employee =res;
    console.log(res);
    })
  }

  paySalary(employeeId: number){
    this.svc.paySalary(this.employeeId).subscribe((res)=>{
      this.status =res;
      console.log(res);
    })
  }
}
