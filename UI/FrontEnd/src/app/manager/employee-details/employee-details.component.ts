import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent  implements OnInit {

  id: any;
  employee: Employee | undefined;
  status :boolean | undefined;

  constructor(private svc: EmployeeService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('empid');
    console.log(this.id);
    this.svc.getEmployee(this.id).subscribe((response) => {
      this.employee = response;
      console.log(response);
    })
  }

  onUpdateClick(employeeId: number) {
    console.log(employeeId);
    this.router.navigate(['./editemployee', employeeId]);
  };

  delete(){
    console.log(this.id);
    this.svc.deleteEmployee(this.id).subscribe((response) => {
      this.status = response;
      if (response) 
      { alert("Employee Deleted Successfully") }
      else {
        { alert("Error") }
      }
      console.log(response);
    })
  }

}
