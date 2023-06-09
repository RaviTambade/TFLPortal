import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-projectgrid',
  templateUrl: './projectgrid.component.html',
  styleUrls: ['./projectgrid.component.css']
})
export class ProjectgridComponent implements OnInit{
 projects:Project[]
  startPosition:number=1;
  endPosition:number=1;
  selectedProjects:any[] | undefined;
 // expenseEntries:any[];
  size:number=5;
  constructor ( private svc : ProjectService){ 
    this.projects = []; 
  }
  ngOnInit(): void {
    this.svc.getAllProjects().subscribe(
      (response)=>{
        this.projects=response;
        console.log(this.projects);
          this.size=3;
          this.startPosition=0;
          this.endPosition=this.startPosition+this.size;
          this.selectedProjects=this.projects.slice(this.startPosition,this.endPosition);
        })
        }
      
        onPrevious(){
          this.startPosition=this.startPosition-this.size;
          this.endPosition=this.startPosition+this.size;
          this.selectedProjects=this.projects.slice(this.startPosition,this.endPosition);
        }
        onNext(){
          this.startPosition=this.startPosition+this.size;
          this.endPosition=this.startPosition+this.size;
          this.selectedProjects=this.projects.slice(this.startPosition,this.endPosition);
        }
      



  }




