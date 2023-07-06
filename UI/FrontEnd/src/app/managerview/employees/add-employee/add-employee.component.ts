import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee | any;
  Id: number | any;
  status : boolean |undefined;


  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute) {
    this.employee = {
      firstName: '',
      lastName: '',
      birthDate: '',
      hireDate: '',
      contactNumber: '',
      accountNumber: '',
      userId: 0,

    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.Id = params.get('empid')
    })

  }

  addEmployee(form:any): void {
    console.log(form);
    console.log(this.employee);
    this.svc.addEmployee(this.employee).subscribe((response) => {
      this.status = response;
      console.log(response);
      if (response) {
        alert("Employee added successfully")
        this.router.navigate(['/employeelist']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  };

}
