import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filteredtasks',
  templateUrl: './filteredtasks.component.html',
  styleUrls: ['./filteredtasks.component.css']
})
export class FilteredtasksComponent {
  @Output() filterTasksByStatus = new EventEmitter<string>();

  filterTasks(status: string) {
    this.filterTasksByStatus.emit(status);
  }

}
