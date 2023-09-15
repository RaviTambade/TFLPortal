import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employeeprojectfilters',
  templateUrl: './employeeprojectfilters.component.html',
  styleUrls: ['./employeeprojectfilters.component.css']
})
export class EmployeeprojectfiltersComponent {
  activeFilter:string=''
  @Output() filterByStatus = new EventEmitter<string>();
  filterProjects(status: string) {
    this.activeFilter=status
    this.filterByStatus.emit(status);
  }
}
