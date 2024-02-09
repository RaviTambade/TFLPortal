import { Component, Input } from '@angular/core';
import { TimesheetEntry } from 'src/app/shared/Entities/Timesheetmgmt/timesheetEntry';

@Component({
  selector: 'work-list',
  templateUrl: './workList.html',
})
export class WorkList {
 @Input() timesheetEntries:TimesheetEntry[]=[]
}
