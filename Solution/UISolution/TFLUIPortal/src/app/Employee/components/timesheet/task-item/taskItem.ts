import { Component, Input } from '@angular/core';
import { TimesheetEntryModel } from 'src/app/shared/Models/Timesheetmgmt/TimesheetEntryModel';

@Component({
  selector: 'task-item',
  templateUrl: './taskItem.html',
})
export class TaskItem {
  @Input() timesheetEntry: TimesheetEntryModel | undefined;
}
