import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-searchtask',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  taskId: any;
  task: Task | undefined;

  receiveTask($event: any) {
    console.log("event catched")
    this.task = $event.task;
    console.log(this.taskId);
  }

}
