import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'inserttask',
  templateUrl: './insert-task.component.html',
  styleUrls: ['./insert-task.component.scss']
})
export class InsertTaskComponent {
 
  task : Task = {
    
    taskId : 0,
    taskName: '',
    startDate: '',
    endDate: '',
    description: '',
  };

  status : boolean |undefined;



  constructor(private svc : TaskService) { }

  insertTask(form:any){
    this.svc.insert(form).subscribe(
      (response)=>{
      this.status=response;
      console.log(response);
      if(response){

        alert("Task Inserted successfully");
        
        window.location.reload();
        
        }
        
        else{
        
        alert("error")
        
       }
    },(error)=>{
      this.status=false;
    }
    )
  }

   

}


