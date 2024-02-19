import { Component, Input } from '@angular/core';
import { TimesheetEntryModel } from 'src/app/shared/Models/Timesheetmgmt/TimesheetEntryModel';

@Component({
  selector: 'task-list',
  templateUrl: './TaskList.html',
})
export class TaskList {
 @Input() tasks:TimesheetEntryModel[]=[]
}
