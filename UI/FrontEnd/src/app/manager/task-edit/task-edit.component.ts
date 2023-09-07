import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {


  id: any | undefined;
  task: Task | any;
  status: boolean | undefined

  constructor(private svc: EmployeeService, private router: Router, private route: ActivatedRoute) {
    this.task = {
      id: 0,
      title: '',
      startDate: '',
      endDate: '',
      description: '',
    };
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = this.route.snapshot.paramMap.get('taskid');
      console.log(this.id);
    });
    this.svc.getTask(this.id).subscribe((response) => {
      this.task = response;
      console.log(this.task);
    });
  }

  updateTask(form: any): void {
    this.svc.updateTask(form).subscribe((response) => {
      this.status = response;
      console.log(response);
      if (response) {
        alert("Task updated successfully")
        this.router.navigate(['/task-list']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  };

}

