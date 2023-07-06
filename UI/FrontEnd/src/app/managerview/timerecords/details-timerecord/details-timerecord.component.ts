import { Component, OnInit } from '@angular/core';
import { Timesheet } from '../../timesheets/timesheet';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'details-timerecord',
  templateUrl: './details-timerecord.component.html',
  styleUrls: ['./details-timerecord.component.css']
})
export class DetailsTimerecordComponent implements OnInit{

  timesheets: Timesheet[] | undefined;
  id:any;
  date:any|undefined;
  employee: any;
  

  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute, public fb: FormBuilder) {
    this.date=''
  }

  ngOnInit(): void {
    this.id = localStorage.getItem("id");
    
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
