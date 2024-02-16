import { Component } from '@angular/core';
import { TimeRecorder } from 'src/app/shared/Entities/ResourcePool/InOutTimeRecorder';
import { HrService } from 'src/app/shared/services/Staffing/hr.service';

@Component({
  selector: 'in-out-time-recorder',
  templateUrl: './in-out-time-recorder.html',
})

export class InOutTimeRecorder {
  
  constructor(private hrSvc:HrService){}

  InOutTimeRecorder:TimeRecorder={
    employeeId:0,
    workDate:'',
    inTime:'',
    outTime:''
  }


  onSubmit(){
    console.log(this.InOutTimeRecorder);
    this.hrSvc.addInOutTime(this.InOutTimeRecorder).subscribe((res)=>{
      console.log(res);
    })
  }
}
