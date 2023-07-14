import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/project';

@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  id: any | undefined;
  project: Project | any;
  status: boolean | undefined

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
      this.id = params.get('id');
      console.log(this.id);
    });
    this.svc.getProjectById(this.id).subscribe((response) => {
      this.project = response;
      console.log(this.project);
    });
  }

  updateproject(form: any): void {
    this.svc.updateProject(form).subscribe((response) => {
      this.status = response;
      console.log(response);
      if (response) {
        alert("Project updated successfully")
        this.router.navigate(['/projectlist']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  };

}