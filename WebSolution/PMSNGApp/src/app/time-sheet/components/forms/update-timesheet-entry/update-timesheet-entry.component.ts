import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { TimeSheetEntry } from 'src/app/time-sheet/models/timesheetentry';
import { TimeSheetService } from 'src/app/time-sheet/services/time-sheet.service';

@Component({
  selector: 'app-update-timesheet-entry',
  templateUrl: './update-timesheet-entry.component.html',
  styleUrls: ['./update-timesheet-entry.component.css'],
})
export class UpdateTimesheetEntryComponent {
  activitiyTypes: string[] = [
    'task',
    'userstory',
    'bug',
    'issues',
    'meeting',
    'learning',
    'mentoring',
    'break',
    'clientcall',
    'other',
  ];

  @Input() timeSheetEntry!: TimeSheetEntry;
  @Output() stateChangeEvent = new EventEmitter<boolean>();
  constructor(private timeSheetService: TimeSheetService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.timeSheetEntry = changes['timeSheetEntry'].currentValue;
    this.timeSheetEntry.fromTime=this.timeSheetEntry.fromTime.split(':00').at(0)!;
    this.timeSheetEntry.toTime=this.timeSheetEntry.toTime.split(':00').at(0)!;
  }

  onClick() {
    let timeSheetEntry: TimeSheetEntry = {
      id: this.timeSheetEntry.id,
      fromTime: this.timeSheetEntry.fromTime+':00',
      toTime: this.timeSheetEntry.toTime+':00',
      durationInMinutes: this.timeSheetEntry.durationInMinutes,
      durationInHours: this.timeSheetEntry.durationInHours,
      timeSheetId: this.timeSheetEntry.timeSheetId,
      work: this.timeSheetEntry.work,
      workCategory: this.timeSheetEntry.workCategory,
      description: this.timeSheetEntry.description,
    };

    this.timeSheetService
      .updateTimeSheetEntry(timeSheetEntry.id, timeSheetEntry)
      .subscribe((res) => {
        if (res) {
          this.stateChangeEvent.emit(true);
        }
      });
  }
  getDuration() {
    let startTime = this.timeSheetEntry.fromTime;
    let endTime = this.timeSheetEntry.toTime;
    if (startTime != '' && endTime != '') {
      const startDate = new Date(`1970-01-01T${startTime}`);
      const endDate = new Date(`1970-01-01T${endTime}`);

      const durationMilliseconds = endDate.getTime() - startDate.getTime();
      this.timeSheetEntry.durationInMinutes =
        durationMilliseconds / (1000 * 60);
      this.timeSheetEntry.durationInHours = this.convertMinutesintoHours(
        this.timeSheetEntry.durationInMinutes
      );
    }
  }

  convertMinutesintoHours(minutes: number) {
    let str = `${(minutes / 60).toFixed(0)}h: ${minutes % 60}m`;
    return str;
  }
}
