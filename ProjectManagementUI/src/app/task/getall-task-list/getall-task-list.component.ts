import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-getall-task-list',
  templateUrl: './getall-task-list.component.html',
  styleUrls: ['./getall-task-list.component.scss']
})
export class GetallTaskListComponent implements OnInit {
  tasks :Task[]|undefined;
  constructor(private svc: TaskService) { }

  ngOnInit(): void {
    this.svc.getTasks().subscribe((response)=>{
      this.tasks=response;
      console.log(response);
    });

    
  }

}
