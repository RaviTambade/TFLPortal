import {
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { TimeSheetDetailView } from '../../models/timesheet-detail-view';
@Component({
  selector: 'timesheet-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() timesheetId!: number;
  timeSheetDetails: TimeSheetDetailView[] = [];
  totalminutes: any = 0;


  constructor(private workmgmtSvc: WorkmgmtService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.workmgmtSvc
      .getTimeSheetDetails(changes['timesheetId'].currentValue)
      .subscribe((res) => {
        this.totalminutes = 0;
        this.timeSheetDetails = res;
        this.timeSheetDetails.forEach((entry) => {
          entry = this.workmgmtSvc.getDurationOfWork(entry);
          this.totalminutes += entry.durationInMinutes;
        });
        this.totalminutes = this.workmgmtSvc.convertMinutesintoHours(this.totalminutes);
      });
  }
}
