import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { Router } from '@angular/router';
import { ProjectMembershipDetails } from '../../Models/projectmembershipdetails';

@Component({
  selector: 'app-all-unassigned-employee',
  templateUrl: './all-unassigned-employee.component.html',
  styleUrls: ['./all-unassigned-employee.component.css']
})
export class AllUnassignedEmployeeComponent implements OnInit{
  employees:ProjectMembershipDetails[]=[];
  allEmployees:any[]=[];
  visibleForm:boolean=false;
  selectedEmployeeId:number |undefined;
  fullName:string  |undefined;

  constructor(private service:ProjectsService, private router:Router){}
  
  ngOnInit(): void {
      this.service.getAllUnassignedEmployees().subscribe((res)=>{
        this.employees = res;
        console.log(this.employees);
      })
  }

  onClick(employeeId:number,firstName:string,lastName:string){
    this.visibleForm=true;
    this.selectedEmployeeId=employeeId;
    this.fullName= firstName+ " " +lastName;
    console.log(this.fullName);
  }
}
  
 


  

