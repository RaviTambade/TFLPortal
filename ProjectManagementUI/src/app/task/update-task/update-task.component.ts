import { Component, OnInit } from '@angular/core';
import {Task} from '../task'
import { TaskService } from '../task.service';
@Component({
  selector: 'app-updatetask',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {


  task : Task | any;
  taskId : any;
  status : boolean | undefined;
  constructor(private svc : TaskService) { }

  ngOnInit(): void {
  }

  updateTask(){
    this.svc.update(this.task).subscribe((response) => {
      this.task = response;
      console.log(response);
      if(response){
        alert("task updated successfully");
        window.location.reload();
      }
      else{
        alert("error")
      }
    });
  }

  receiveTask($event:any){
    this.task = $event.task;
  }

}


