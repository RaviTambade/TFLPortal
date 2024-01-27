import { Component } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';

@Component({
  selector: 'app-all-assigned-employee',
  templateUrl: './all-assigned-employee.component.html',
  styleUrls: ['./all-assigned-employee.component.css']
})
export class AllAssignedEmployeeComponent {
  constructor(private service:ProjectsService){}
  status:string="yes";
  employees:any[]=[];

  ngOnInit(): void {
    this.service.getAllAssignedEmployees(this.status).subscribe((res)=>{
    this.employees = res;
    console.log(this.employees);
    const employees =this.employees.map(u=>u.employeeId)
    console.log(employees);
    })
  }
}
