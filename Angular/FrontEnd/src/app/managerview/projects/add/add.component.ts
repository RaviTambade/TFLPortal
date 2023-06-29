import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../project';

@Component({
  selector: 'addproject',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  project: Project | any;
  Id: number | any;
  status : boolean |undefined;

  constructor(private svc: ManagerviewService, private router: Router, private route: ActivatedRoute) {
    this.project = {
      id: 0,
      title: '',
      startDate: '',
      endDate: '',
      description: '',
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.Id = params.get('id')
    })

  }

  addProject(form:any): void {
    console.log(form);
    console.log(this.project);
    this.svc.addProject(this.project).subscribe((response) => {
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
 {

}
