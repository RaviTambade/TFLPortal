import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';
import { TimeSheetService } from 'src/app/Services/timesheet.service';

@Component({
  selector: 'app-timesheetlist',
  templateUrl: './timesheetlist.component.html',
  styleUrls: ['./timesheetlist.component.css']
})
export class TimesheetlistComponent {
  timeSheetSummaryData: any[]=[];
selectedTimeSheetId:number |null=null
  
constructor(private timeSheetService: TimeSheetService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    const employeeId = 1;
    this.timeSheetService
      .getAllTimeSheetsSummaryOfEmployee(employeeId)
      .subscribe(data => {
        this.timeSheetSummaryData = data;
      });
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
    this.router.navigate(['/timesheetadding']);
}

}