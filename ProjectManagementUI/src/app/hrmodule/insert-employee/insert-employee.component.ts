import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.scss']
})
export class InsertEmployeeComponent implements OnInit {

  employee : Employee ={
    id: 0,
    firstName: '',
    lastName: '',
    birthDate: '',
    hireDate: '',
    contactNumber: '',
    email: '',
    password: '',
    accountNumber: ''
  };

  status:boolean|undefined;

  constructor(private svc : EmployeeService) { }

  ngOnInit(): void {
  }

  insertEmployee(form:any){
    this.svc.insert(form).subscribe(
      (response)=>{
      this.status=response;
      console.log(response);
    },(error)=>{
      this.status=false;
    }
    )
  }

}
