import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.scss']
})
export class UpdateemployeeComponent implements OnInit {

  employee : Employee | any;
  employeeId : any;
  status : boolean | undefined;
  constructor(private svc : EmployeeService) { }

  ngOnInit(): void {
  }

  updateEmployee(){
    this.svc.updateEmployee(this.employee).subscribe((response) => {
      this.employee = response;
      console.log(response);
      if(response){
        alert("employee updated successfully");
        window.location.reload();
      }
      else{
        alert("error")
      }
    });
  }

  receiveEmployee($event:any){
    this.employee = $event.employee;
  }


}
