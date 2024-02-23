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
    workingDate:'',
    inTime:'',
    outTime:''
  }


  onSubmit(){
    this.hrSvc.addInOutTime(this.InOutTimeRecorder).subscribe((res)=>{
    })
  }
}
