import {
  Component,
  Input,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { TimeSheetService } from '../../services/time-sheet.service';
import { TimeSheetDetails } from '../../models/TimeSheetDetails';
@Component({
  selector: 'timesheet-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() timeSheetId!: number;
  timeSheetDetails: TimeSheetDetails[] = [];
  totalminutes: any = 0;


  constructor(private timeSheetSvc: TimeSheetService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.timeSheetSvc
      .getTimeSheetDetails(changes['timeSheetId'].currentValue)
      .subscribe((res) => {
        this.totalminutes = 0;
        this.timeSheetDetails = res;
        this.timeSheetDetails.forEach((entry) => {
          entry = this.timeSheetSvc.getDurationOfWork(entry);
          this.totalminutes += entry.durationInMinutes;
        });
        this.totalminutes = this.timeSheetSvc.convertMinutesintoHours(this.totalminutes);
  

      });
  }
}
