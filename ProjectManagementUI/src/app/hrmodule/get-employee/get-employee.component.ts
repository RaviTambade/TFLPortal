import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.scss']
})
export class GetEmployeeComponent implements OnInit {

  constructor(private svc : EmployeeService) { }

  
  @Input() employeeId : number | undefined;
  employee : Employee | undefined;
  @Output() sendEmployee = new EventEmitter();

  

  ngOnInit(): void {
  }

  getEmployee(employeeId:any){
    this.svc.getById(employeeId).subscribe((response) =>{
      this.employee = response;
      this.sendEmployee.emit({employee:this.employee});
      console.log(this.employee);
    })
  }

}
