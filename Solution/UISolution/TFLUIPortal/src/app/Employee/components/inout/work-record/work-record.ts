import { Component, OnInit } from '@angular/core';
import { HrService } from 'src/app/shared/services/Staffing/hr.service';

@Component({
  selector: 'app-work-record',
  templateUrl: './work-record.html',
})
export class WorkRecord  implements OnInit {

  employeeId:number=10;
  workRecords:any;
  constructor(private hrSvc:HrService){}
  ngOnInit(): void {
    this.hrSvc.workRecords(this.employeeId).subscribe((res=>{
       this.workRecords=res;
       console.log(res);
    }))
  }




}
