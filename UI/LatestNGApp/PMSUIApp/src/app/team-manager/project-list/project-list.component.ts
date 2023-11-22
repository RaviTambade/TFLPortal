import { Component, OnInit } from '@angular/core';
import { TokenClaims } from 'src/app/Models/Enums/tokenClaims';
import { Project } from 'src/app/Models/project';
import { Projectlist } from 'src/app/Models/projectlist';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{

  constructor(private service :ProjectService, private authservice:AuthenticationService){

  }
  project:Projectlist[] | undefined;
  managerId:number=Number(this.authservice.getClaimFromToken(TokenClaims.userId));
  ngOnInit(): void {
    this.service.getManagerProjects(this.managerId).subscribe((res)=>{
      this.project=res;
    })

  }

}
