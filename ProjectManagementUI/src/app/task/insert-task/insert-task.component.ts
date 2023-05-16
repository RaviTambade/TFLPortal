import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-inserttask',
  templateUrl: './insert-task.component.html',
  styleUrls: ['./insert-task.component.scss']
})
export class InsertTaskComponent implements OnInit {
  
    task : Task = {
      projectId: 0,
      taskName: '',
      startDate: '',
      endDate: '',
      description: '',
      taskId: 0
    };
  
    status : boolean |undefined;
  
    constructor(private svc : TaskService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    insertTask(form:any){
      this.svc.insert(form).subscribe(
        (response)=>{
        this.status=response;
        console.log(response);
      },(error)=>{
        this.status=false;
      }
      )
    }
  
     






























}
