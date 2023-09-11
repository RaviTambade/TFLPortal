import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timesheetdetails',
  templateUrl: './timesheetdetails.component.html',
  styleUrls: ['./timesheetdetails.component.css']
})
export class TimesheetdetailsComponent {
  @Input() selectedTimeSheet: any;


}
