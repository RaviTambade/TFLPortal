import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../Task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {


  id: any | undefined;
  task: Task | any;
  status: boolean | undefined

  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute) {
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
        this.router.navigate(['/taskslist']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  };

}
{

}
