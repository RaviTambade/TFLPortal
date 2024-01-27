import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WorkCategoryDetails } from 'src/app/time-sheet/models/workcategorydetails';

@Component({
  selector: 'app-timesheet-employee-work-data',
  templateUrl: './timesheet-employee-work-data.component.html',
  styleUrls: ['./timesheet-employee-work-data.component.css'],
})
export class TimesheetEmployeeWorkDataComponent implements OnChanges {
  workCategory: WorkCategoryDetails = {
    userStory: 0,
    task: 0,
    bug: 0,
    issues: 0,
    meeting: 0,
    learning: 0,
    mentoring: 0,
    clientCall: 0,
    other: 0,
    label: '',
  };
  totalHours: number = 0;

  @Input() workCategoryDetails: WorkCategoryDetails[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.workCategoryDetails = changes['workCategoryDetails'].currentValue;
    this.workCategory = new WorkCategoryDetails(0, 0, 0, 0, 0, 0, 0, 0, 0, '');
    this.totalHours = 0;

    this.workCategoryDetails.forEach((category) => {
      this.workCategory.userStory += category.userStory;
      this.workCategory.task += category.task;
      this.workCategory.clientCall += category.clientCall;
      this.workCategory.meeting += category.meeting;
      this.workCategory.issues += category.issues;
      this.workCategory.bug += category.bug;
      this.workCategory.mentoring += category.mentoring;
      this.workCategory.learning += category.learning;
      this.workCategory.other += category.other;
    });

    Object.values(this.workCategory).forEach(
      (value) => (this.totalHours = this.totalHours + value)
    );
  }
}
