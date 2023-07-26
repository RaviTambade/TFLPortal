import { Component, OnInit } from '@angular/core';
import { TotalProjectDetails } from '../totalprojectdetails';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-total-details',
  templateUrl: './total-details.component.html',
  styleUrls: ['./total-details.component.css']
})
export class TotalDetailsComponent implements OnInit {

  projectdetails: TotalProjectDetails[] | any;
  // id: number|any ;
  id: number |any;

  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute, public fb: FormBuilder) {
    
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.svc.getTotalDetails(this.id).subscribe((response) => {
      this.projectdetails = response;
      console.log(this.projectdetails);
    });
      
  

  }






}
