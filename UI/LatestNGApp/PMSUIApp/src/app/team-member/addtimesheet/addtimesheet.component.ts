import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TimeSheetService } from 'src/app/Services/timesheet.service';

@Component({
  selector: 'app-addtimesheet',
  templateUrl: './addtimesheet.component.html',
  styleUrls: ['./addtimesheet.component.css']
})
export class AddtimesheetComponent {
// timeSheetForm = new FormGroup({
// employeeId:new FormControl(''),
// date:new FormControl(''),
// fromTime:new FormControl(''),
// toTime:new FormControl(''),
// workingTime:new FormControl(''),
// projectId:new FormControl(''),
// projectName:new FormControl(''),
// task:new FormControl('')
// })

// timesheet : any | undefined;
// status: boolean | undefined;

// //  timeSheets = this.timesheetservice.getItems();

// // checkoutForm = this.formBuilder.group({
// //       id: 0,
// //       employeeId:0,
// //       date: new Date(''),
// //       fromTime: '',
// //       toTime: '',
// //       workingTime: 0,
// //       projectId: 0, 
// //       projectName:'',
// //       task: ''
// // });

// constructor(
//   private timesheetservice: TimeSheetService,private formBuilder: FormBuilder) {
//     this.timesheet={
//       id: 0,
//       employeeId:0,
//       date: new Date(''),
//       fromTime: '',
//       toTime: '',
//       workingTime: 0,
//       projectId: 0, 
//       projectName:'',
//       task: ''
//     }
//   }

//   addTimesheet(form:any): void {

//       this.timesheetservice.insertTimeSheet(this.timesheet).subscribe((response) => {
//         this.status = response;
//         console.log(response);
//   })
// };


newTimeSheet = {
  id: 0,
  employeeId: 0,
  date: new Date(),
  fromTime: '',
  toTime: '',
  workingTime: 0,
  projectId: 0,
  projectName: '',
  task: ''
};

constructor(private timeSheetService: TimeSheetService) { }

addTimeSheet() {
  this.timeSheetService.timeSheets.push(this.newTimeSheet);
  // You can reset the form fields or perform any additional actions here
}

}



