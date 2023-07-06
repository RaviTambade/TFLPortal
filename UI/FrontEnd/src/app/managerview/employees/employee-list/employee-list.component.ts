import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../employee';

@Component({
  selector: 'employeelist',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;

  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.svc.getAllEmployees().subscribe(
      (response) => {
        this.employees = response;
        console.log(this.employees);
      })



  };

  // goToEmployee(empid: number): void {
  //   this.router.navigate(['./detailemployee', empid]);
  // }


  onDetails(empid: number){
    this.router.navigate(['./detailemployee', empid]);
  }

}
