import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  tasks: Task[] | undefined;

  constructor(private svc: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.svc.getAllTasks().subscribe((response) => {
        this.tasks = response;
        console.log(this.tasks);
      })

  }

  onDetails(taskid: number){
    this.router.navigate(['./task-details', taskid]);
  }
}
