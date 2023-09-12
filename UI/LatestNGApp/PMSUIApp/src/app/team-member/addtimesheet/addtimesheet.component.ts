import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addtimesheet',
  templateUrl: './addtimesheet.component.html',
  styleUrls: ['./addtimesheet.component.css']
})
export class AddtimesheetComponent {
timeSheetForm = new FormGroup({
employeeId:new FormControl(''),
date:new FormControl(''),
fromTime:new FormControl(''),
toTime:new FormControl(''),
workingTime:new FormControl(''),
projectId:new FormControl(''),
projectName:new FormControl(''),
task:new FormControl('')

})
}
