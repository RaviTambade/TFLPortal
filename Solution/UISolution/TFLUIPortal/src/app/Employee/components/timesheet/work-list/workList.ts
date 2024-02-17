import { Component, Input } from '@angular/core';
import { TimesheetEntryModel } from 'src/app/shared/Models/Timesheetmgmt/TimesheetEntryModel';

@Component({
  selector: 'work-list',
  templateUrl: './workList.html',
})
export class WorkList {
 @Input() timesheetEntries:TimesheetEntryModel[]=[]
}
