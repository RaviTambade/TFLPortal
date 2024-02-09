import { Component, Input } from '@angular/core';
import { TimesheetEntry } from 'src/app/shared/Entities/Timesheetmgmt/timesheetEntry';

@Component({
  selector: 'work-item',
  templateUrl: './workItem.html',
})
export class WorkItem {
  @Input() timesheetEntry: TimesheetEntry | undefined;
}
