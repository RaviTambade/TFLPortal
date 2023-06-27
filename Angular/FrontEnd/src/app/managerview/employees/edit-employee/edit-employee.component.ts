import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  id: any | undefined;
  employees: Employee[] | any;
  
  status: boolean | undefined

  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute) {
    this.employees = {
       id: 0,
       firstName: '',
       lastName: '',
       birthDate: '',
       hireDate: '',
       contactNumber:'',
       accountNumber :'',
       userId: 0,
      
    };
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('empid');
      console.log(this.id);
    });
   
    this.svc.getAllEmployees().subscribe((response) => {
      this.employees = response;
      console.log(response);
    });

  };
  updateEmployee(form: any): void {
    this.svc.updateEmployee(form).subscribe((response) => {
      this.status = response;
      console.log(response);
      if (response) {
        alert("Employee updated successfully")
        this.router.navigate(['/employeelist']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  };



}



