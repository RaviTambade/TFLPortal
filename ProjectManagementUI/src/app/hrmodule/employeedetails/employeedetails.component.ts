import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {

  constructor(private svc : EmployeeService) { }

  employee : Employee | undefined;
  employeeId : number | undefined;
  

  ngOnInit(): void {
  }

  getEmployee(employeeId:number){
    this.svc.getById(employeeId).subscribe((response) =>{
      this.employee = response;
      console.log(response);
    })
  }

}
