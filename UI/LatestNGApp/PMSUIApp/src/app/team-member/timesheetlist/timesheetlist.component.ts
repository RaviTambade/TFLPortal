import { Component } from '@angular/core';
import { TimeSheetService } from 'src/app/Services/timesheet.service';

@Component({
  selector: 'app-timesheetlist',
  templateUrl: './timesheetlist.component.html',
  styleUrls: ['./timesheetlist.component.css']
})
export class TimesheetlistComponent {
  timeSheetSummaryData: any[]=[];
  selectedTimeSheet: any;

  constructor(private timeSheetService: TimeSheetService) {}

  ngOnInit() {
    const employeeId = 1;
    this.timeSheetService
      .getAllTimeSheetsSummaryOfEmployee(employeeId)
      .subscribe(data => {
        this.timeSheetSummaryData = data;
      });
  }
  showDetails(timeSheetId: number) {
    this.timeSheetService.getTimeSheetById(timeSheetId).subscribe(details => {
      this.selectedTimeSheet = details;
    });
  }
}
