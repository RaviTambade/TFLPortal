import { Component } from '@angular/core';

@Component({
  selector: 'app-tasksbymanager',
  templateUrl: './tasksbymanager.component.html',
  styleUrls: ['./tasksbymanager.component.css']
})
export class TasksbymanagerComponent {
  activeComponent: 'assigned' | 'unassigned' = 'assigned';
}