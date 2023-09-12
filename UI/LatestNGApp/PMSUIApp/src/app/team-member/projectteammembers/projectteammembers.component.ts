import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-projectteammembers',
  templateUrl: './projectteammembers.component.html',
  styleUrls: ['./projectteammembers.component.css'],
})
export class ProjectteammembersComponent implements OnInit {
projectId: number =0;
  teamMembers: string[];
  constructor(private projectService: ProjectService, private router: Router) {
    this.teamMembers = [];
  }
  ngOnInit(): void {
      this.projectService.selectedProjectId$.subscribe((response) => {
        this.projectId=response;
        this.projectService.getProjectTeamMembers(this.projectId).subscribe((res) => {
          this.teamMembers = res.teammembers;
          console.log(res);
        });
      });
  }
}
