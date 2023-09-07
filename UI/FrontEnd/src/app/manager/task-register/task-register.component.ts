import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-task-register',
  templateUrl: './task-register.component.html',
  styleUrls: ['./task-register.component.css']
})
export class TaskRegisterComponent implements OnInit {

  task: Task | any;
  Id: number | any;
  status : boolean |undefined;

  constructor(private svc: EmployeeService, private router: Router, private route: ActivatedRoute) {
    this.task = {
      id: 0,
      projectId:0,
      title: '',
      startDate: '',
      endDate: '',
      description: '',
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.Id = params.get('id')
    })

  }

  addTask(form:any): void {
    console.log(form);
    console.log(this.task);
    this.svc.addTask(this.task).subscribe((response) => {
      this.status = response;
      console.log(response);
      if (response) {
        alert("task added successfully")
        this.router.navigate(['/task-list']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  };
}

