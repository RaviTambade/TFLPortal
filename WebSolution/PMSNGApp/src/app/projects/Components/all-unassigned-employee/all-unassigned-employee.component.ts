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
  employees:any[]=[];
  allEmployees:any[]=[];


  constructor(private service:ProjectsService, private memberService:MembersService){}
  
  ngOnInit(): void {
      this.service.getAllUnassignedEmployees().subscribe((res)=>{
        this.employees = res;
        console.log(this.employees);
        // const employees =this.employees.map(u=>u.employeeId)
        // console.log(employees);
        })
      }
  }
  
 


  

