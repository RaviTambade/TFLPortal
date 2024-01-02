import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/projects/Models/project';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-myworkingprojects',
  templateUrl: './myworkingprojects.component.html',
  styleUrls: ['./myworkingprojects.component.css']
})
export class MyworkingprojectsComponent implements OnInit{
  projects:Project[]=[];
  employeeId:number|any;
  constructor(private projectSvc:ProjectService){
    this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId)
  }

  ngOnInit(): void {
    this.projectSvc.getProjectsOfEmployee(this.employeeId).subscribe((res)=>{
    this.projects=res;
    console.log(this.employeeId);
    })
   
   }
}
