import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TokenClaims } from 'src/app/Models/Enums/tokenClaims';
import { Mytimesheetlist } from 'src/app/Models/mytimesheetlist';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { TaskService } from 'src/app/Services/task.service';
import { TimeSheetService } from 'src/app/Services/timesheet.service';

@Component({
  selector: 'app-timesheetlist',
  templateUrl: './timesheetlist.component.html',
  styleUrls: ['./timesheetlist.component.css']
})
export class TimesheetlistComponent {
timeSheetList:Mytimesheetlist[]=[]
selectedTimeSheetId:number |null=null
teamMemberId: number = 0;
  selectedTimePeriod:string="today"
constructor(private timeSheetService: TimeSheetService,
    private router: Router,
    private employeeService:EmployeeService,
    private authservice:AuthenticationService) {}

  ngOnInit() {
    let userId = this.authservice.getClaimFromToken(TokenClaims.userId);
    this.employeeService.getEmployeeId(userId).subscribe((res) => {
      this.teamMemberId = res;
      this.getMyTimeSheet(this.selectedTimePeriod)
  })
}
getMyTimeSheet(timePeriod:string){
this.selectedTimePeriod=timePeriod
this.timeSheetService.getTimeSheetList(this.teamMemberId,timePeriod).subscribe((res)=>{
  this.timeSheetList=res
})

}
  selectTimeSheet(id :number){
if(this.selectedTimeSheetId === id){
  this.selectedTimeSheetId = null;
}
else{
  this.selectedTimeSheetId= id
}
this.timeSheetService.setTimeSheetId(id);
  }

add() {
    this.router.navigate(['teammember/timesheetadd']);
}

}