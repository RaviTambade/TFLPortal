import { Component, OnInit } from '@angular/core';
import { ProjectsModule } from '../../projects.module';
import { ProjectsService } from '../../Services/projects.service';
import { ProjectAllocation } from '../../Models/projectallocation';
import { MembersService } from 'src/app/resource-management/Services/members.service';

@Component({
  selector: 'app-all-unassigned-employee',
  templateUrl: './all-unassigned-employee.component.html',
  styleUrls: ['./all-unassigned-employee.component.css']
})
export class AllUnassignedEmployeeComponent implements OnInit{

  constructor(private service:ProjectsService, private memberService:MembersService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  status:string="no";
  employees:any[]=[];
  allEmployees:any[]=[];
  employeeId=1;

  getAllUnassignedEmployees(status:string){
  this.service.getAllUnassignedEmployees(this.status).subscribe((res)=>{
    this.employees = res;
    console.log(this.employees);
    const employees =this.employees.map(u=>u.employeeId)
    console.log(employees);
    })
  }


  getEmployeeDetails(){
    this.memberService.getEmployeeDetails(this.employeeId).subscribe((res)=>{
    this.allEmployees =res;
    console.log(res);
    })
  }









}
