import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-gettask',
  templateUrl: './gettask.component.html',
  styleUrls: ['./gettask.component.scss']
})
export class GettaskComponent implements OnInit {

  constructor(private svc : TaskService) { }

  @Input() taskId : number | undefined;
  task : Task | undefined;
  @Output() sendTask = new EventEmitter();

  ngOnInit(): void {
  }

  getTask(taskId:any){
    this.svc.getTaskById(taskId).subscribe((response) =>{
      this.task = response;
      this.sendTask.emit({task:this.task});
      console.log(this.task);
    
    
    
    })
  }

}
