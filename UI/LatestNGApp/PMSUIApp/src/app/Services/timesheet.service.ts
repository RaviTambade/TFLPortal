import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectService } from './project.service';
@Injectable({
  providedIn: 'root'
})
export class TimeSheetService {
  timeSheets: {
    id: number;
    employeeId:number;
    date: Date;
    fromTime: string;
    toTime: string;
    workingTime: number;
    projectId: number;
    task: string;
  }[] = [
    {
      id: 1,
      employeeId:1,
      date: new Date("2023-02-03"),
      fromTime: "09:00 AM",
      toTime: "12:00 PM",
      workingTime: 3,
      projectId: 1,
      task: "Task 1"
    },
    {
      id: 2,
      employeeId:1,
      date: new Date("2023-02-04"),
      fromTime: "02:00 PM",
      toTime: "05:00 PM",
      workingTime: 3,
      projectId: 2, 
      task: "Task 2"
    },
    {
      id: 3,
      employeeId:1,
      date: new Date("2023-02-05"),
      fromTime: "09:00 AM",
      toTime: "12:00 PM",
      workingTime: 3,
      projectId: 1,
      task: "Task 3"
    },
    {
      id: 4,
      employeeId:1,
      date: new Date("2023-02-06"),
      fromTime: "02:00 PM",
      toTime: "05:00 PM",
      workingTime: 3,
      projectId: 2, 
      task: "Task 4"
    },
    {
      id: 5,
      employeeId:1,
      date: new Date("2023-02-06"),
      fromTime: "09:00 AM",
      toTime: "12:00 PM",
      workingTime: 3,
      projectId: 3,
      task: "Task 5"
    },
    {
      id: 6,
      employeeId:1,
      date: new Date("2023-02-06"),
      fromTime: "02:00 PM",
      toTime: "05:00 PM",
      workingTime: 3,
      projectId: 3, 
      task: "Task 6"
    },
    {
      id: 7,
      employeeId:1,
      date: new Date("2023-02-07"),
      fromTime: "09:00 AM",
      toTime: "12:00 PM",
      workingTime: 3,
      projectId: 4,
      task: "Task 7"
    },
    {
      id: 8,
      employeeId:1,
      date: new Date("2023-02-08"),
      fromTime: "02:00 PM",
      toTime: "05:00 PM",
      workingTime: 3,
      projectId: 4, 
      task: "Task 8"
    },
    {
      id: 1,
      employeeId:1,
      date: new Date("2023-02-03"),
      fromTime: "09:00 AM",
      toTime: "12:00 PM",
      workingTime: 3,
      projectId: 1,
      task: "Task 1"
    },
    {
      id: 2,
      employeeId:1,
      date: new Date("2023-02-04"),
      fromTime: "02:00 PM",
      toTime: "05:00 PM",
      workingTime: 3,
      projectId: 2, 
      task: "Task 2"
    },
    {
      id: 1,
      employeeId:1,
      date: new Date("2023-02-03"),
      fromTime: "09:00 AM",
      toTime: "12:00 PM",
      workingTime: 3,
      projectId: 1,
      task: "Task 1"
    },
    {
      id: 2,
      employeeId:1,
      date: new Date("2023-02-04"),
      fromTime: "02:00 PM",
      toTime: "05:00 PM",
      workingTime: 3,
      projectId: 2, 
      task: "Task 2"
    },
  ];

  constructor(private projectsService:ProjectService) {}

  getAllTimeSheetsSummaryOfEmployee(employeeId: number): Observable<any[]> {
    // Assuming employeeId is used to filter timesheets for a specific employee
    const summaryData = this.timeSheets
      .filter(timesheet => timesheet.employeeId === employeeId)
      .map(timesheet => ({
        id: timesheet.id,
        date: timesheet.date,
        projectName: this.getProjectNameById(timesheet.projectId)
      }));
    return of(summaryData);
  }

  private getProjectNameById(projectId: number): string {
    const project = this.projectsService.projects.find(project => project.id === projectId);
    return project ? project.title : '';
  }
  insertTimeSheet(timeSheet: any): Observable<any> {
    const newId = this.generateNewTimeSheetId();
    timeSheet.id = newId;
    this.timeSheets.push(timeSheet);

    return of(timeSheet);
  }
  getTimeSheetById(timesheetId: number): Observable<any> {
    const timesheet = this.timeSheets.find(sheet => sheet.id === timesheetId);
    return of(timesheet);
  }

  private generateNewTimeSheetId(): number {
    const maxId = Math.max(...this.timeSheets.map(timesheet => timesheet.id), 0);
    return maxId + 1;
  }
}
