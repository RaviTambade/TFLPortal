import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',
  styleUrls: ['./get-employees.component.scss']
})
export class GetEmployeesComponent implements OnInit {

  constructor(private svc: EmployeeService) { }

  employees :Employee[] |undefined;

  ngOnInit(): void {
    this.svc.getEmployees().subscribe((response)=>{
      this.employees=response;
      console.log(response);
    });
  }

}
