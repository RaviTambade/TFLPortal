import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimeSheetEntry } from 'src/app/time-sheet/models/TimeSheetEntry';
import { TimeSheet } from 'src/app/time-sheet/models/timesheet';
import { TimeSheetService } from 'src/app/time-sheet/services/time-sheet.service';

@Component({
  selector: 'app-insert-time-sheet',
  templateUrl: './insert-time-sheet.component.html',
  styleUrls: ['./insert-time-sheet.component.css'],
})
export class InsertTimeSheetComponent implements OnInit {
  constructor(private timeSheetSvc: TimeSheetService) {}

  timeSheetEntries: TimeSheetEntry[] = [];

  subscription: Subscription | undefined;
  totalminutes: any = 0;

  ngOnInit(): void {
    this.subscription = this.timeSheetSvc
      .ReceiveTimeSheetEntries()
      .subscribe((res) => {
        this.totalminutes = 0;
        res
          .map((r) => r.durationInMinutes)
          .forEach((i) => {
            this.totalminutes += i;
          });

        this.totalminutes = this.convertMinutesintoHours(this.totalminutes);

        this.timeSheetEntries = res;
        console.log(res);
      });
  }

  onSubmit() {

    this.timeSheetEntries.forEach((r) => {
      r.fromTime = r.fromTime + ':00';
      r.toTime = r.toTime + ':00';
    });

    let timesheet: TimeSheet = {
      id: 0,
      timeSheetDate: new Date().toISOString().slice(0, 10),
      status: '',
      employeeId: 10,
      timeSheetEntries: this.timeSheetEntries,
      statusChangedDate: new Date().toISOString().slice(0, 10)
    };

    this.timeSheetSvc.addTimeSheet(timesheet).subscribe((res) => {
      console.log(res);
      
      alert('timesheet added');
    });
  }

  convertMinutesintoHours(minutes: number) {
    let str = `${(minutes / 60).toFixed(0)}h: ${minutes % 60}m`;
    return str;
  }

  
}
