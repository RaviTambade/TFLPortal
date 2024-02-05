import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MemberUtilization } from 'src/app/Entities/memberutilization';

@Component({
  selector: 'app-timesheet-employee-work-data',
  templateUrl: './timesheet-employee-work-data.component.html',
  styleUrls: ['./timesheet-employee-work-data.component.css'],
})
export class TimesheetEmployeeWorkDataComponent implements OnChanges {
  memberUtilization: MemberUtilization = {
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

  @Input() memberUtilizations: MemberUtilization[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.memberUtilizations = changes['memberUtilizations'].currentValue;
    this.memberUtilization = new MemberUtilization(0, 0, 0, 0, 0, 0, 0, 0, 0, '');
    this.totalHours = 0;

    this.memberUtilizations.forEach((category) => {
      this.memberUtilization.userStory += category.userStory;
      this.memberUtilization.task += category.task;
      this.memberUtilization.clientCall += category.clientCall;
      this.memberUtilization.meeting += category.meeting;
      this.memberUtilization.issues += category.issues;
      this.memberUtilization.bug += category.bug;
      this.memberUtilization.mentoring += category.mentoring;
      this.memberUtilization.learning += category.learning;
      this.memberUtilization.other += category.other;
    });

    Object.values(this.memberUtilization).forEach(
      (value) => (this.totalHours = this.totalHours + value)
    );
  }
}
