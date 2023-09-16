import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-managerprojectfilters',
  templateUrl: './managerprojectfilters.component.html',
  styleUrls: ['./managerprojectfilters.component.css']
})
export class ManagerprojectfiltersComponent {
  activeFilter:string=''
  @Output() filterByStatus = new EventEmitter<string>();
  filterProjects(status: string) {
    this.activeFilter=status
    this.filterByStatus.emit(status);
  }
}
