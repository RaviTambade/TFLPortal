import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { Timesheet } from '../timesheet';
import { TimesheetInfo } from '../timesheetInfo';

@Component({
  selector: 'addtimesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.css']
})
export class AddTimesheetComponent implements OnInit {

  timesheetInfo : TimesheetInfo ={
    projectId: 0,
    taskId: 0,
    empId: 0,
    starttime: '',
    endtime: '',
    timesheetId: 0
  }
status:boolean   | undefined

model= {
"projectId":0,
"taskId":0,
"empId":0,
"starttime": "yy-mm-dd hh-mm-ss",
"endtime":"yy-mm-dd hh-mm-ss",
};



constructor(private svc:ManagerviewService){

}
 ngOnInit(): void {

}
addTimesheet(form:any){
this.svc.addTimesheet(form).subscribe(
(res)=>{
this.status = res;
console.log(res);
}
);
}
}



