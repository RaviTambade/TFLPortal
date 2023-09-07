import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent{
  id: any | undefined;
employee: Employee | any;

status: boolean | undefined

constructor(private svc: EmployeeService, private router: Router, private route: ActivatedRoute) {
  this.employee = {
    id: 0,
    firstName: '',
    lastName: '',
    birthDate: '',
    hireDate: '',
    contactNumber: '',
    userId: 0,

  };
}
ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    this.id = params.get('empid');
    console.log(this.id);
  });
  this.svc.getEmployee(this.id).subscribe((response) => {
      this.employee = response;
      console.log(this.employee);
    });
};

updateEmployee(form: any): void {
  this.svc.updateEmployee(form).subscribe((response) => {
    this.status = response;
    console.log(response);
    if (response) {
      alert("Employee updated successfully")
      this.router.navigate(['/employee-list']);
    }
    else {
      alert("Check the form again ....")
    }
  })
};
}

