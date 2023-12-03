import { Component, OnInit } from '@angular/core';
import { ProjectsModule } from '../../projects.module';
import { ProjectsService } from '../../Services/projects.service';
import { ProjectAllocation } from '../../Models/projectallocation';

@Component({
  selector: 'app-all-unassigned-employee',
  templateUrl: './all-unassigned-employee.component.html',
  styleUrls: ['./all-unassigned-employee.component.css']
})
export class AllUnassignedEmployeeComponent implements OnInit{

  constructor(private service:ProjectsService){}
  status:string="no";
  employees:ProjectAllocation[]=[];

  ngOnInit(): void {
    this.service.getAllUnassignedEmployees(this.status).subscribe((res)=>{
    this.employees = res;
    const employee =this.employees.map(u=>u.employeeId)
    console.log(employee);
    })
  }


}
