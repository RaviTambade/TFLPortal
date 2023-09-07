import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Timesheet } from 'src/app/models/timesheet';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-timerecords-details',
  templateUrl: './timerecords-details.component.html',
  styleUrls: ['./timerecords-details.component.css']
})
export class TimerecordsDetailsComponent   implements OnInit{

  timesheets: Timesheet[] | undefined;
  id:any;
  date:any;
  employee: any;
  

  constructor(private svc: EmployeeService, private router: Router, private route: ActivatedRoute, public fb: FormBuilder) {
    this.date=''
  }

  ngOnInit(): void {
    this.id = localStorage.getItem("id");
    console.log(this.id);
    
    this.route.paramMap.subscribe((params) => {
      this.date = params.get('date');
      const parts = this.date.split('/'); // Assuming the original format is "dd/mm/yyyy"
      this.date = `${parts[2]}-${parts[1].padStart(2,'0')}-${parts[0].padStart(2, '0')}`;
      console.log(this.date);
    })
  
    this.svc.getAllTimesheets(this.id, this.date).subscribe((response) => {
      this.timesheets = response;
      console.log(this.timesheets);
    });

    this.svc.getEmployee(this.id).subscribe((response) =>{
      this.employee = response;
    });
  }

}
