import { Component } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';

@Component({
  selector: 'app-unassigned-employee-of-project',
  templateUrl: './unassigned-employee-of-project.component.html',
  styleUrls: ['./unassigned-employee-of-project.component.css']
})
export class UnassignedEmployeeOfProjectComponent {

  projectId:number=3;
  unassignedEmployees:any[]=[];
  status:string="no";
  constructor(private service:ProjectsService){}

  ngOnInit(): void {
    this.service.getEmployeesOfProject(this.projectId,this.status).subscribe((res)=>{
      this.unassignedEmployees=res;
      console.log(res);
    }) 
  }
}
