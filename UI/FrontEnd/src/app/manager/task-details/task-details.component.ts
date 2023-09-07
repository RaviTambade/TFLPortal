import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  
  id: any;
  task: Task | undefined;
  status :boolean | undefined;

  constructor(private svc: EmployeeService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('taskid');
    console.log(this.id);
    this.svc.getTask(this.id).subscribe((response) => {
      this.task = response;
      console.log(response);
    })
  }

  onUpdateClick(taskId: number) {
    console.log(taskId);
    this.router.navigate(['./task-edit', taskId]);
  };

  delete(){
    console.log(this.id);
    this.svc.deleteTask(this.id).subscribe((response) => {
      this.status = response;
      if (response) 
      { alert("Task Deleted Successfully") }
      else {
        { alert("Error") }
      }
      console.log(response);
    })
  }
}

