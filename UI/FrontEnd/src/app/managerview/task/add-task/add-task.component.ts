import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task | any;
  Id: number | any;
  status : boolean |undefined;

  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute) {
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
        this.router.navigate(['/tasklist']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  };

}
 {

}
{

}
