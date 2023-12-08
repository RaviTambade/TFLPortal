import { Component, OnInit } from '@angular/core';
import { TimeSheetService } from '../../services/time-sheet.service';

@Component({
  selector: 'app-total-work-duration-of-employee',
  templateUrl: './total-work-duration-of-employee.component.html',
  styleUrls: ['./total-work-duration-of-employee.component.css']
})
export class TotalWorkDurationOfEmployeeComponent implements OnInit{
  employeeId: number = 10;
  fromDate: string = '2023-01-04';
  toDate: string = '2023-12-04';
  WorkCategories: any[] = [];

  constructor(private timesheetService: TimeSheetService) {}
  ngOnInit(): void {
    this.getWorkHours();
  }

  getWorkHours() {
    this.timesheetService
      .getTotalDurationOfEmployee(this.employeeId, this.fromDate, this.toDate)
      .subscribe((res) => {
        console.log(res);
        this.WorkCategories = res;
      });
  }




}
