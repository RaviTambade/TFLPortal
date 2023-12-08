import {
  Component,
  Input,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { TimeSheetService } from '../../services/time-sheet.service';
import { TimeSheetEntry } from '../../models/TimeSheetDetails';
@Component({
  selector: 'timesheet-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() timeSheetId!: number;
  timeSheetEntries: TimeSheetEntry[] = [];
  totalminutes: any = 0;


  constructor(private timeSheetSvc: TimeSheetService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.timeSheetSvc
      .getTimeSheetEntries(changes['timeSheetId'].currentValue)
      .subscribe((res) => {
        this.totalminutes = 0;
        this.timeSheetEntries = res;
        this.timeSheetEntries.forEach((entry) => {
          entry = this.timeSheetSvc.getDurationOfWork(entry);
          this.totalminutes += entry.durationInMinutes;
        });
        this.totalminutes = this.timeSheetSvc.convertMinutesintoHours(this.totalminutes);
  

      });
  }
}
