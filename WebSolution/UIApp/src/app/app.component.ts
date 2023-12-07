import { Component } from '@angular/core';
import { Project } from './projects/Models/project';
import { task } from './task/Models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PMSNGApp';
  project: Project | undefined;
  taskId:number|undefined;
  timeSheetId:number|undefined;

  onReceiveProjectId(selectedProjectevent: Project) {
    this.project = selectedProjectevent;
  }

  onReceiveTaskId(selectedTaskId: number) {
    this.taskId = selectedTaskId;
  }
 

  onReceiveTimeSheetId(timesheetId:number){
    this.timeSheetId=timesheetId;
  }
}
