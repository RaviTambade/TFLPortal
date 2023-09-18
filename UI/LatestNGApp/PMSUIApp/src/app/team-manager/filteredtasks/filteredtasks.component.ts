import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filteredtasks',
  templateUrl: './filteredtasks.component.html',
  styleUrls: ['./filteredtasks.component.css']
})
export class FilteredtasksComponent {

  activeFilter:string=''
  @Output() filterTasksByStatus = new EventEmitter<string>();

  filterTasks(status: string) {
    this.activeFilter=status
    this.filterTasksByStatus.emit(status);
  }
   
}
