import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OverallProjectDetails } from 'src/app/models/overall-project-details';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-project-overalldetails',
  templateUrl: './project-overalldetails.component.html',
  styleUrls: ['./project-overalldetails.component.css']
})
export class ProjectOveralldetailsComponent implements OnInit {

  projectdetails: OverallProjectDetails[] | any;
  // id: number|any ;
  id: number |any;

  constructor(private svc: EmployeeService, private router: Router, private route: ActivatedRoute, public fb: FormBuilder) {
    
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.svc.getTotalDetails(this.id).subscribe((response) => {
      this.projectdetails = response;
      console.log(this.projectdetails);
    });
  }
}
