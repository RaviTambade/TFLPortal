import { Component, OnInit } from '@angular/core';
import { ManagerviewService } from '../../managerview.service';
import { Project } from 'src/app/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  projectId: any;
  project: Project | undefined;

  constructor(private svc: ManagerviewService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log(this.projectId);
    this.svc.getProjectById(this.projectId).subscribe((response) => {
    this.project = response;
    console.log(response);
    })
  }


}
