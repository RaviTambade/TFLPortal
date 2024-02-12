import { Component, Input } from '@angular/core';
import { TimesheetEntryModel } from 'src/app/shared/Models/Timesheetmgmt/TimesheetEntryModel';

@Component({
  selector: 'work-item',
  templateUrl: './workItem.html',
})
export class WorkItem {
  @Input() timesheetEntry: TimesheetEntryModel | undefined;
}
