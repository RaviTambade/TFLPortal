import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { task } from '../../Models/task';

@Component({
  selector: 'task-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  constructor(private service:TaskService){

  }
  tasks:task[]=[];
  projectId:number=1;
  memberId:number=19;
  ngOnInit(): void {
    this.service.getTaskOfMembers(this.projectId,this.memberId).subscribe((res)=>{
     this.tasks=res;
    })
    
  }

}
